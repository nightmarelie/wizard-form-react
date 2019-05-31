/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/Wrapper';
import Table from 'components/CustomTable';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import Action from 'components/Action/Action';
import Button from 'components/Button/Button';
import Avatar from 'components/Avatar/Avatar';

import fakeData from 'common/fake-data.json';
import routes from 'common/routes';
import * as helper from 'common/helpers';

import * as global from 'common/styles/global.styles';

interface State {
  tryToDeleteUser: number; // like this
}

class ListOfUser extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      tryToDeleteUser: 0,
    };

    this.handleCancel = this.handleCancel.bind(this);
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleCancel, false);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleCancel, false);
  }

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
    const tryToDeleteUser = this.state.tryToDeleteUser;
    const headers = fakeData.headers;
    const payload = fakeData.users;
    return (
      <Container>
        <Title title="List of user" />
        <Table.Wrapper>
          <Table.Row addClassName="header">
            <Table.Cell addClassName="first" payload={headers.colomnName} />
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
                  to={helper.tempReplacer(routes.viewUser, { ':id': data.id })}
                  className="navigate"
                >
                  <Avatar addClassName="avatar-small" />
                  {data.name}
                </Link>
              </Table.Cell>
              <Table.Cell payload={data.company} />
              <Table.Cell payload={data.contacts} />
              <Table.Cell payload={data.lastUpdateAt} />
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
              <Button link={routes.createUser} title="Create new user" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell addClassName="separator">
              <Pagination
                totalRecords={payload.length}
                pageLimit={2}
                onPageChanged={(): void => console.log('test')}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Wrapper>
      </Container>
    );
  }
}

export default ListOfUser;
