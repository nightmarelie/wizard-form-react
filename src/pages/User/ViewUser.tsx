/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Container, Column } from 'components/Wrapper';
import { BreadcrumbTitle } from 'components/Title';
import * as Table from 'components/Table';
import Action from 'components/Action/Action';
import Avatar from 'components/Avatar/Avatar';

import routes from 'common/routes';

class ViewUser extends React.Component {
  public render(): React.ReactElement {
    return (
      <Container>
        <BreadcrumbTitle
          title="User Name"
          breadcrumbLink={routes.listOfUsers}
          breadcrumbTitle="Users list"
        />
        <Container addClassName="content-wrapper preview-wrapper">
          <Column addClassName="half left">
            <Avatar />
          </Column>
          <Column addClassName="half right">
            <Table.Wrapper>
              <Table.Row>
                <Table.Cell>
                  Account <Action addClassName="action-edit" />
                </Table.Cell>
                <Table.Cell>
                  <Table.Wrapper addClassName="info">
                    <Table.Row>
                      <Table.Cell>User name:</Table.Cell>
                      <Table.Cell>username</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Password:</Table.Cell>
                      <Table.Cell>******</Table.Cell>
                    </Table.Row>
                  </Table.Wrapper>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Personal <Action addClassName="action-edit" />
                </Table.Cell>
                <Table.Cell>
                  <Table.Wrapper addClassName="info">
                    <Table.Row>
                      <Table.Cell>First name:</Table.Cell>
                      <Table.Cell>Maxim</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Last Name:</Table.Cell>
                      <Table.Cell>Moroozc</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Bith date:</Table.Cell>
                      <Table.Cell>121212</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Email:</Table.Cell>
                      <Table.Cell>test@test.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Address:</Table.Cell>
                      <Table.Cell>rererere</Table.Cell>
                    </Table.Row>
                  </Table.Wrapper>
                </Table.Cell>
              </Table.Row>
            </Table.Wrapper>
          </Column>
        </Container>
      </Container>
    );
  }
}
export default ViewUser;
