/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';

// components
import { Container, Column } from 'components/Wrapper';
import { BreadcrumbTitle } from 'components/Title';
import * as Table from 'components/Table';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import Avatar from 'components/Avatar/Avatar';

// common
import routes, { ViewUserParams as RouteParams, Forms } from 'common/routes';
import constants from 'common/constants/index.json';
import { Dictionary, hobbies, languages } from 'common/dictionaries';
import * as helper from 'common/helpers';

// domain
import { ApplicationState } from 'domain/store';
import * as User from 'domain/user';

type Props = {
  data: User.Model;
  loading: boolean;
  errors?: boolean;
  fetchData: (id: number) => boolean;
} & RouteComponentProps<RouteParams>;

class ViewUser extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
    this.handleNavigateTo = this.handleNavigateTo.bind(this);
  }

  public componentDidMount(): void {
    const {
      match: { params },
      fetchData,
    } = this.props;

    fetchData(+params.id);
  }

  private handleNavigateTo(form: Forms): void {
    const {
      match: { params },
      history,
    } = this.props;

    history.push(
      helper.stringReplacer(routes.editUser, {
        id: params.id,
        form: form,
      }),
    );
  }

  public render(): React.ReactElement {
    const { data, loading } = this.props;
    return (
      <Container>
        {!loading && data && (
          <React.Fragment>
            <BreadcrumbTitle
              title={data.username}
              breadcrumbLink={routes.listOfUsers}
              breadcrumbTitle={constants.view.labels.list}
            />
            <Container className="content-wrapper preview-wrapper">
              <Column className="half left">
                <Avatar
                  image={
                    data.image ? URL.createObjectURL(data.image) : undefined
                  }
                />
              </Column>
              <Column className="half right">
                <Table.Wrapper>
                  {/* Account start */}
                  <Table.Row>
                    <Table.Cell>
                      {`${constants.view.labels.account} `}
                      <ActionIcon
                        className="action-edit"
                        handler={() => this.handleNavigateTo(Forms.account)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Wrapper className="info">
                        <Table.Row>
                          <Table.Cell>
                            {constants.account.labels.username}:
                          </Table.Cell>
                          <Table.Cell>{data.username}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.account.labels.password}:
                          </Table.Cell>
                          <Table.Cell>*******</Table.Cell>
                        </Table.Row>
                      </Table.Wrapper>
                    </Table.Cell>
                  </Table.Row>
                  {/* Account end */}
                  {/* Personal start */}
                  <Table.Row>
                    <Table.Cell>
                      {`${constants.view.labels.personal} `}
                      <ActionIcon
                        className="action-edit"
                        handler={() => this.handleNavigateTo(Forms.profile)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Wrapper className="info">
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.firstName}:
                          </Table.Cell>
                          <Table.Cell>{data.firstName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.lastName}:
                          </Table.Cell>
                          <Table.Cell>{data.lastName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.birthDate}:
                          </Table.Cell>
                          <Table.Cell>
                            {moment(data.birthDate).format('DD.MM.YYYY')}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.email}:
                          </Table.Cell>
                          <Table.Cell>{data.email}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.address}:
                          </Table.Cell>
                          <Table.Cell>{data.address}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.profile.labels.gender}:
                          </Table.Cell>
                          <Table.Cell>{data.gender}</Table.Cell>
                        </Table.Row>
                      </Table.Wrapper>
                    </Table.Cell>
                  </Table.Row>
                  {/* Personal end */}
                  {/* Contacts start */}
                  <Table.Row>
                    <Table.Cell>
                      {`${constants.view.labels.contacts} `}
                      <ActionIcon
                        className="action-edit"
                        handler={() => this.handleNavigateTo(Forms.contacts)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Wrapper className="info">
                        <Table.Row>
                          <Table.Cell>
                            {constants.contacts.labels.company}:
                          </Table.Cell>
                          <Table.Cell>{data.company}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.contacts.labels.fax}:
                          </Table.Cell>
                          <Table.Cell>{data.fax}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.contacts.labels.github}:
                          </Table.Cell>
                          <Table.Cell>{data.github}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.contacts.labels.facebook}:
                          </Table.Cell>
                          <Table.Cell>{data.facebook}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.contacts.labels.mainLanguage}:
                          </Table.Cell>
                          <Table.Cell>
                            {data.mainLanguage
                              ? languages
                                  .filter(
                                    h => h.value === data.mainLanguage.value,
                                  )
                                  .map(h => h.label)
                                  .join(', ')
                              : '-'}
                          </Table.Cell>
                        </Table.Row>
                        {data.phones &&
                          data.phones.length > 0 &&
                          data.phones.map((phone, i) => (
                            <Table.Row key={i}>
                              <Table.Cell>
                                {`${constants.contacts.labels.phone} #${i}:`}
                              </Table.Cell>
                              <Table.Cell>{phone}</Table.Cell>
                            </Table.Row>
                          ))}
                      </Table.Wrapper>
                    </Table.Cell>
                  </Table.Row>
                  {/* Contacts end */}
                  {/* Capabilities start */}
                  <Table.Row className="section-row">
                    <Table.Cell>
                      {`${constants.view.labels.capabilities} `}
                      <ActionIcon
                        className="action-edit"
                        handler={() =>
                          this.handleNavigateTo(Forms.capabilities)
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Wrapper className="info">
                        <Table.Row>
                          <Table.Cell>
                            {constants.capabilities.labels.skills}:
                          </Table.Cell>
                          <Table.Cell>
                            {data.skills && data.skills.length > 0
                              ? data.skills
                                  .map((skill: Dictionary) => skill.label)
                                  .join(', ')
                              : '-'}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.capabilities.labels.hobbies}:
                          </Table.Cell>
                          <Table.Cell>
                            {data.hobbies
                              ? hobbies
                                  .filter(h => data.hobbies[h.value])
                                  .map(h => h.label)
                                  .join(', ')
                              : '-'}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            {constants.capabilities.labels.info}:
                          </Table.Cell>
                          <Table.Cell>{data.additionalInfo}</Table.Cell>
                        </Table.Row>
                      </Table.Wrapper>
                    </Table.Cell>
                  </Table.Row>
                  {/* Capabilities end */}
                </Table.Wrapper>
              </Column>
            </Container>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps: (s: ApplicationState) => void = ({ users }) => ({
  data: users.data,
  loading: users.meta.loading,
  errors: users.errors,
});

const mapDispatchToProps: (d: Dispatch) => void = dispatch => ({
  fetchData: (id: number) => dispatch(User.fetch.request(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewUser);
