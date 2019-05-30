/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/Wrapper';
import Table from 'components/CustomTable';
import Title from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import Action from 'components/Action/Action';

import fakeData from 'common/fake-data.json';
import routes from 'common/routes';
import * as helper from 'common/helpers';

class ListOfUser extends React.Component {
  private handleUserDelete(e: React.MouseEvent) {
    console.log(e.target);
  }

  public render(): React.ReactElement {
    const headers = fakeData.headers;
    const payload = fakeData.users;
    return (
      <Container>
        <Title title="List of user" />
        <Table.Wrapper>
          <Table.Row className="flex-row header">
            <Table.Cell
              className="flex-cell first"
              payload={headers.colomnName}
            />
            <Table.Cell className="flex-cell" payload={headers.colomnCompany} />
            <Table.Cell
              className="flex-cell"
              payload={headers.colomnContancts}
            />
            <Table.Cell
              className="flex-cell"
              payload={headers.colomnLastUpdate}
            />
            <Table.Cell className="flex-cell last" payload="" />
          </Table.Row>
          <Table.Row className="flex-row">
            <Table.Cell className="flex-cell separator" />
          </Table.Row>
          {payload.map<ReactElement>(data => (
            <Table.Row key={data.id} className="flex-row">
              <Table.Cell className="flex-cell first">
                <Link
                  to={helper.tempReplacer(routes.viewUser, { ':id': data.id })}
                  className="navigate"
                >
                  <span className="avatar avatar-small" />
                  {data.name}
                </Link>
              </Table.Cell>
              <Table.Cell className="flex-cell" payload={data.company} />
              <Table.Cell className="flex-cell" payload={data.contacts} />
              <Table.Cell className="flex-cell" payload={data.lastUpdateAt} />
              <Table.Cell className="flex-cell last" payload="">
                <Action addClassName="action-edit" />
                <Action
                  handler={this.handleUserDelete}
                  addClassName="action-delete"
                />
              </Table.Cell>
              <Table.Cell className="flex-cell danger" payload="">
                <Action addClassName="action-delete-danger">delete</Action>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row className="flex-row">
            <Table.Cell className="flex-cell separator">
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
