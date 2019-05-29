/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import Container from 'components/Container/Container';
import Table from 'components/CustomTable';
import Title from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';

import fakeData from 'common/fake-data.json';

interface IProps {}

const ListOfUser: React.FC<IProps> = (_: IProps): ReactElement<IProps> => {
  const headers = fakeData.headers;
  const payload = fakeData.users;
  return (
    <Container>
      <Title title="List of user" />
      <Table.Wrapper>
      <Table.Row className="flex-row header">
        <Table.Cell className="flex-cell first" payload={headers.colomnName} />
        <Table.Cell className="flex-cell" payload={headers.colomnCompany} />
        <Table.Cell className="flex-cell" payload={headers.colomnContancts} />
        <Table.Cell className="flex-cell" payload={headers.colomnLastUpdate} />
        <Table.Cell className="flex-cell last" payload='' />
      </Table.Row>
      <Table.Row className="flex-row">
        <Table.Cell className="flex-cell separator" />
      </Table.Row>
      {
        payload.map(data => (
          <Table.Row className="flex-row">
            <Table.Cell className="flex-cell first" payload={data.name}>
              <span className="avatar avatar-small"></span>
            </Table.Cell>
            <Table.Cell className="flex-cell" payload={data.company} />
            <Table.Cell className="flex-cell" payload={data.contacts} />
            <Table.Cell className="flex-cell" payload={data.lastUpdateAt} />
            <Table.Cell className="flex-cell last" payload=''>
              <span className="action action-icon action-edit"></span>
              <span className="action action-icon action-delete"></span>
            </Table.Cell>
          </Table.Row>
        ))
      }
      <Table.Row className="flex-row">
        <Table.Cell className="flex-cell separator">
          <Pagination 
            totalRecords={payload.length}
            pageLimit={2}
            onPageChanged={() => console.log('test')}
          />
        </Table.Cell>
      </Table.Row>
      </Table.Wrapper>
    </Container>
  );
};

export default ListOfUser;
