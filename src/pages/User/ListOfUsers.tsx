/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import onClickOutside from 'react-onclickoutside';

import { Container } from 'components/Wrapper';
import Table from 'components/CustomTable';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import LinkButton from 'components/LinkButton/LinkButton';
import Avatar from 'components/Avatar/Avatar';

// common
import routes, { Forms } from 'common/routes';
import * as helper from 'common/helpers';
import constants from 'common/constants/index.json';
import * as global from 'common/styles/global.styles';

// domain
import { ApplicationState } from 'domain/store';
import * as User from 'domain/user';

interface State {
  data: User.Model[];
  loading: boolean;
  errors?: boolean;
  tryToDeleteUser: number;
  searchValue: string;
  pagination: {
    perPage: number;
    offset: number;
    pageCount: number;
    total: number;
    currentPage: number;
  };
}

type Props = {
  data: User.Model[];
  loading: boolean;
  errors?: boolean;
  headers: { [key: string]: string };
  fetchAllData: (meta: User.Metadata) => User.DataWithMeta;
  removeData: (id: number) => boolean;
  pagination: {
    perPage: number;
    offset: number;
    pageCount: number;
    total: number;
    currentPage: number;
  };
} & RouteComponentProps;

class ListOfUser extends React.Component<Props, State> {
  public static defaultProps = {
    loading: false,
    headers: {
      username: constants.list.labels.username,
      company: constants.list.labels.company,
      contacts: constants.list.labels.contacts,
      lastUpdate: constants.list.labels.lastUpdate,
    },
  };

  public constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      errors: undefined,
      tryToDeleteUser: 0,
      searchValue: '',
      pagination: props.pagination,
    };
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleCancel, false);
    // fetch all users
    this.props.fetchAllData(this.fetchMeta());
  }

  private fetchMeta = (): User.Metadata => {
    const { pagination, loading, searchValue } = this.state;

    return {
      pagination,
      loading,
      searchValue,
    };
  };

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleCancel, false);
  }

  private handlePageClick: (data: { selected: number }) => void = ({
    selected,
  }) => {
    const pagination = this.state.pagination;
    const offset = Math.ceil(selected * pagination.perPage);

    this.setState(
      { pagination: { ...pagination, offset, currentPage: selected } },
      () => {
        this.props.fetchAllData(this.fetchMeta());
      },
    );
  };

  private handleCancel = (event: KeyboardEvent): void => {
    if (event.keyCode === 27) {
      this.setState({
        tryToDeleteUser: 0,
      });
    }
  };

  private handleClickOutside = (_: MouseEvent): void => {
    this.setState({
      tryToDeleteUser: 0,
    });
  };

  private handleTryToUserDelete(userId: number): void {
    this.setState({
      tryToDeleteUser: userId,
    });
  }

  private handleUserDelete = (userId: number): void => {
    const { removeData, fetchAllData } = this.props;
    removeData(userId);
    fetchAllData(this.fetchMeta());
  };

  public render(): React.ReactElement {
    const { tryToDeleteUser } = this.state;
    const { headers, data, history, pagination } = this.props;
    return (
      <Container>
        <Title title={constants.list.labels.title} />
        <Table.Wrapper>
          <Table.Row className="header">
            <Table.Cell className="first" payload={headers.username} />
            <Table.Cell payload={headers.company} />
            <Table.Cell payload={headers.contacts} />
            <Table.Cell payload={headers.lastUpdate} />
            <Table.Cell className="last" payload="" />
          </Table.Row>
          {data && data.length > 0 ? (
            <React.Fragment>
              <Table.Row>
                <Table.Cell className="separator" />
              </Table.Row>
              {data.map<ReactElement>(user => (
                <Table.Row
                  key={user.id}
                  isShifted={user.id === tryToDeleteUser}
                >
                  <Table.Cell className="first">
                    <Link
                      css={global.link}
                      to={helper.stringReplacer(routes.viewUser, {
                        id: user.id,
                      })}
                      className="navigate"
                    >
                      <Avatar className="avatar-small" image={user.imageUrl} />
                      {user.username}
                    </Link>
                  </Table.Cell>
                  <Table.Cell payload={user.company} />
                  <Table.Cell
                    payload={
                      user.phones && user.phones.length > 0
                        ? user.phones[0]
                        : user.email
                    }
                  />
                  <Table.Cell
                    payload={
                      user.updateAt ? moment(user.updateAt).fromNow() : '-'
                    }
                  />
                  <Table.Cell className="last" payload="">
                    <ActionIcon
                      className="action-edit"
                      handler={() =>
                        history.push(
                          helper.stringReplacer(routes.editUser, {
                            id: user.id,
                            form: Forms.account,
                          }),
                        )
                      }
                    />
                    <ActionIcon
                      handler={() => this.handleTryToUserDelete(user.id)}
                      className="action-delete"
                    />
                  </Table.Cell>
                  <Table.Cell className="danger" payload="">
                    <ActionIcon
                      handler={() => this.handleUserDelete(user.id)}
                      className="action-delete-danger"
                    >
                      delete
                    </ActionIcon>
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell className="separator">
                  <Pagination
                    pageCount={pagination.pageCount}
                    currentPage={pagination.currentPage}
                    handler={this.handlePageClick}
                  />
                </Table.Cell>
              </Table.Row>
            </React.Fragment>
          ) : (
            <Table.Row className="empty">
              <Table.Cell className="separator">
                <h2 css={global.h2}>No users here :(</h2>
                <LinkButton
                  link={helper.stringReplacer(routes.createUser, {
                    form: Forms.account,
                  })}
                  title="Create new user"
                />
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Wrapper>
      </Container>
    );
  }
}

const mapStateToProps: (s: ApplicationState) => void = ({ users }) => ({
  data: !users.data ? [] : users.data,
  loading: users.meta.loading,
  errors: users.errors,
  pagination: users.meta.pagination,
});

const mapDispatchToProps: (d: Dispatch) => void = dispatch => ({
  fetchAllData: (meta: User.Metadata) => dispatch(User.fetchAll.request(meta)),
  removeData: (id: number) => dispatch(User.remove.request(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(onClickOutside(ListOfUser));
