/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/Wrapper';
import Table from 'components/CustomTable';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import Action from 'components/Action/Action';
import Button from 'components/Button';
import Avatar from 'components/Avatar/Avatar';

import fakeData from 'common/fake-data.json';
import routes from 'common/routes';
import * as helper from 'common/helpers';

import * as global from 'common/styles/global.styles';

interface State {
  tryToDeleteUser: number;
  pagination: {
    perPage: number;
    offset: number;
    pageCount: number;
  };
}

class ListOfUser extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      tryToDeleteUser: 0,
      pagination: {
        perPage: 4,
        offset: 0,
        pageCount: 1,
      },
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleCancel, false);

    // TODO: replace with db request
    const pagination = this.state.pagination;
    this.setState({
      pagination: {
        ...pagination,
        pageCount: this.colculatePageCount(
          fakeData.users.length,
          pagination.perPage,
        ),
      },
    });
  }

  private colculatePageCount(total: number, perPage: number): number {
    return Math.ceil(total / perPage);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleCancel, false);
  }

  private handlePageClick: (data: { selected: number }) => void = ({
    selected,
  }) => {
    const pagination = this.state.pagination;
    const offset = Math.ceil(selected * pagination.perPage);

    this.setState({ pagination: { ...pagination, offset } }, () => {
      // load data from db
    });
  };

  private handleCancel(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.setState({
        tryToDeleteUser: 0,
      });
    }
  }

  private handleUserDelete(userId: number): void {
    this.setState({
      tryToDeleteUser: userId,
    });
  }

  public render(): React.ReactElement {
    const { tryToDeleteUser, pagination } = this.state;
    const headers = fakeData.headers;
    const payload = fakeData.users;
    return (
      <Container>
        <Title title="List of user" />
        <Table.Wrapper>
          <Table.Row addClassName="header">
            <Table.Cell addClassName="first" payload={headers.colomnUsername} />
            <Table.Cell payload={headers.colomnCompany} />
            <Table.Cell payload={headers.colomnContancts} />
            <Table.Cell payload={headers.colomnLastUpdate} />
            <Table.Cell addClassName="last" payload="" />
          </Table.Row>
          <Table.Row>
            <Table.Cell addClassName="separator" />
          </Table.Row>
          {payload.map<ReactElement>(data => (
            <Table.Row key={data.id} isShifted={data.id === tryToDeleteUser}>
              <Table.Cell addClassName="first">
                <Link
                  css={global.link}
                  to={helper.stringReplacer(routes.viewUser, { id: data.id })}
                  className="navigate"
                >
                  <Avatar addClassName="avatar-small" />
                  {data.username}
                </Link>
              </Table.Cell>
              <Table.Cell payload={data.company} />
              <Table.Cell payload={data.email} />
              <Table.Cell payload={data.updateAt} />
              <Table.Cell addClassName="last" payload="">
                <Action addClassName="action-edit" />
                <Action
                  handler={() => this.handleUserDelete(data.id)}
                  addClassName="action-delete"
                />
              </Table.Cell>
              <Table.Cell addClassName="danger" payload="">
                <Action addClassName="action-delete-danger">delete</Action>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row addClassName="empty">
            <Table.Cell addClassName="separator">
              <h2 css={global.h2}>No users here :(</h2>
              <Button
                link={helper.stringReplacer(routes.createUser, {
                  step: 'first',
                })}
                title="Create new user"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell addClassName="separator">
              <Pagination
                pageCount={pagination.pageCount}
                handler={this.handlePageClick}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Wrapper>
      </Container>
    );
  }
}

export default ListOfUser;
