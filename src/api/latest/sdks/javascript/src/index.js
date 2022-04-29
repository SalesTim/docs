/**
 * nBold API
 * Visit our [API documentation](https://docs.nbold.co/api/) for more information. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ApiError from './model/ApiError';
import ApiErrorError from './model/ApiErrorError';
import ApiErrorErrorInnerError from './model/ApiErrorErrorInnerError';
import ApprovalTeamMember from './model/ApprovalTeamMember';
import ApprovedApprovalResponsePayload from './model/ApprovedApprovalResponsePayload';
import ApprovedApprovalResponsePayloadApprover from './model/ApprovedApprovalResponsePayloadApprover';
import ApprovedApprovalResponsePayloadUpdates from './model/ApprovedApprovalResponsePayloadUpdates';
import AuditTrail from './model/AuditTrail';
import AuditTrailRecords from './model/AuditTrailRecords';
import AuditTrails from './model/AuditTrails';
import CatalogTemplate from './model/CatalogTemplate';
import CatalogTemplateClonedTeam from './model/CatalogTemplateClonedTeam';
import CatalogTemplateNewTeam from './model/CatalogTemplateNewTeam';
import CatalogTemplateTemplateConfiguration from './model/CatalogTemplateTemplateConfiguration';
import CatalogTemplateTemplateConfigurationApproval from './model/CatalogTemplateTemplateConfigurationApproval';
import CatalogTemplateTemplateConfigurationAudienceTargeting from './model/CatalogTemplateTemplateConfigurationAudienceTargeting';
import CatalogTemplateTemplateConfigurationPermanentMembership from './model/CatalogTemplateTemplateConfigurationPermanentMembership';
import CatalogTemplates from './model/CatalogTemplates';
import Hook from './model/Hook';
import HookConfig from './model/HookConfig';
import HookEvent from './model/HookEvent';
import HookPayload from './model/HookPayload';
import HookSignature from './model/HookSignature';
import HookSignatureRequest from './model/HookSignatureRequest';
import HooksEvents from './model/HooksEvents';
import Job from './model/Job';
import Label from './model/Label';
import Labels from './model/Labels';
import MemberUserIdentifier from './model/MemberUserIdentifier';
import MetadataQueryResult from './model/MetadataQueryResult';
import OwnerUserIdentifier from './model/OwnerUserIdentifier';
import PermanentMember from './model/PermanentMember';
import RejectedApprovalResponsePayload from './model/RejectedApprovalResponsePayload';
import Report from './model/Report';
import ReportUrl from './model/ReportUrl';
import ReportsCategory from './model/ReportsCategory';
import Team from './model/Team';
import TeamChannel from './model/TeamChannel';
import TeamChannelTab from './model/TeamChannelTab';
import TeamChannelTabConfiguration from './model/TeamChannelTabConfiguration';
import TeamChannelTabTeamsApp from './model/TeamChannelTabTeamsApp';
import TeamDiscoverySettings from './model/TeamDiscoverySettings';
import TeamFunSettings from './model/TeamFunSettings';
import TeamGuestSettings from './model/TeamGuestSettings';
import TeamMemberSettings from './model/TeamMemberSettings';
import TeamMembershipPayload from './model/TeamMembershipPayload';
import TeamMessagingSettings from './model/TeamMessagingSettings';
import TeamProvisioningRequest from './model/TeamProvisioningRequest';
import TeamProvisioningRequestTeam from './model/TeamProvisioningRequestTeam';
import TeamProvisioningRequestTeamMembership from './model/TeamProvisioningRequestTeamMembership';
import TeamProvisioningRequestTemplate from './model/TeamProvisioningRequestTemplate';
import User1 from './model/User1';
import Users from './model/Users';
import ApprovalsApi from './api/ApprovalsApi';
import AuditTrailsApi from './api/AuditTrailsApi';
import JobsApi from './api/JobsApi';
import MetadataApi from './api/MetadataApi';
import MicrosoftTeamsChannelsApi from './api/MicrosoftTeamsChannelsApi';
import MicrosoftTeamsMessagesApi from './api/MicrosoftTeamsMessagesApi';
import MicrosoftTeamsTeamsApi from './api/MicrosoftTeamsTeamsApi';
import ReportsApi from './api/ReportsApi';
import SensitivityLabelsApi from './api/SensitivityLabelsApi';
import TeamsApi from './api/TeamsApi';
import TemplatesCatalogApi from './api/TemplatesCatalogApi';
import UsersApi from './api/UsersApi';
import WebhooksApi from './api/WebhooksApi';


/**
* Visit_our__API_documentation_https__docs_nbold_co_api__for_more_information_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var NBoldApi = require('index'); // See note below*.
* var xxxSvc = new NBoldApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new NBoldApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new NBoldApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new NBoldApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError,

    /**
     * The ApiErrorError model constructor.
     * @property {module:model/ApiErrorError}
     */
    ApiErrorError,

    /**
     * The ApiErrorErrorInnerError model constructor.
     * @property {module:model/ApiErrorErrorInnerError}
     */
    ApiErrorErrorInnerError,

    /**
     * The ApprovalTeamMember model constructor.
     * @property {module:model/ApprovalTeamMember}
     */
    ApprovalTeamMember,

    /**
     * The ApprovedApprovalResponsePayload model constructor.
     * @property {module:model/ApprovedApprovalResponsePayload}
     */
    ApprovedApprovalResponsePayload,

    /**
     * The ApprovedApprovalResponsePayloadApprover model constructor.
     * @property {module:model/ApprovedApprovalResponsePayloadApprover}
     */
    ApprovedApprovalResponsePayloadApprover,

    /**
     * The ApprovedApprovalResponsePayloadUpdates model constructor.
     * @property {module:model/ApprovedApprovalResponsePayloadUpdates}
     */
    ApprovedApprovalResponsePayloadUpdates,

    /**
     * The AuditTrail model constructor.
     * @property {module:model/AuditTrail}
     */
    AuditTrail,

    /**
     * The AuditTrailRecords model constructor.
     * @property {module:model/AuditTrailRecords}
     */
    AuditTrailRecords,

    /**
     * The AuditTrails model constructor.
     * @property {module:model/AuditTrails}
     */
    AuditTrails,

    /**
     * The CatalogTemplate model constructor.
     * @property {module:model/CatalogTemplate}
     */
    CatalogTemplate,

    /**
     * The CatalogTemplateClonedTeam model constructor.
     * @property {module:model/CatalogTemplateClonedTeam}
     */
    CatalogTemplateClonedTeam,

    /**
     * The CatalogTemplateNewTeam model constructor.
     * @property {module:model/CatalogTemplateNewTeam}
     */
    CatalogTemplateNewTeam,

    /**
     * The CatalogTemplateTemplateConfiguration model constructor.
     * @property {module:model/CatalogTemplateTemplateConfiguration}
     */
    CatalogTemplateTemplateConfiguration,

    /**
     * The CatalogTemplateTemplateConfigurationApproval model constructor.
     * @property {module:model/CatalogTemplateTemplateConfigurationApproval}
     */
    CatalogTemplateTemplateConfigurationApproval,

    /**
     * The CatalogTemplateTemplateConfigurationAudienceTargeting model constructor.
     * @property {module:model/CatalogTemplateTemplateConfigurationAudienceTargeting}
     */
    CatalogTemplateTemplateConfigurationAudienceTargeting,

    /**
     * The CatalogTemplateTemplateConfigurationPermanentMembership model constructor.
     * @property {module:model/CatalogTemplateTemplateConfigurationPermanentMembership}
     */
    CatalogTemplateTemplateConfigurationPermanentMembership,

    /**
     * The CatalogTemplates model constructor.
     * @property {module:model/CatalogTemplates}
     */
    CatalogTemplates,

    /**
     * The Hook model constructor.
     * @property {module:model/Hook}
     */
    Hook,

    /**
     * The HookConfig model constructor.
     * @property {module:model/HookConfig}
     */
    HookConfig,

    /**
     * The HookEvent model constructor.
     * @property {module:model/HookEvent}
     */
    HookEvent,

    /**
     * The HookPayload model constructor.
     * @property {module:model/HookPayload}
     */
    HookPayload,

    /**
     * The HookSignature model constructor.
     * @property {module:model/HookSignature}
     */
    HookSignature,

    /**
     * The HookSignatureRequest model constructor.
     * @property {module:model/HookSignatureRequest}
     */
    HookSignatureRequest,

    /**
     * The HooksEvents model constructor.
     * @property {module:model/HooksEvents}
     */
    HooksEvents,

    /**
     * The Job model constructor.
     * @property {module:model/Job}
     */
    Job,

    /**
     * The Label model constructor.
     * @property {module:model/Label}
     */
    Label,

    /**
     * The Labels model constructor.
     * @property {module:model/Labels}
     */
    Labels,

    /**
     * The MemberUserIdentifier model constructor.
     * @property {module:model/MemberUserIdentifier}
     */
    MemberUserIdentifier,

    /**
     * The MetadataQueryResult model constructor.
     * @property {module:model/MetadataQueryResult}
     */
    MetadataQueryResult,

    /**
     * The OwnerUserIdentifier model constructor.
     * @property {module:model/OwnerUserIdentifier}
     */
    OwnerUserIdentifier,

    /**
     * The PermanentMember model constructor.
     * @property {module:model/PermanentMember}
     */
    PermanentMember,

    /**
     * The RejectedApprovalResponsePayload model constructor.
     * @property {module:model/RejectedApprovalResponsePayload}
     */
    RejectedApprovalResponsePayload,

    /**
     * The Report model constructor.
     * @property {module:model/Report}
     */
    Report,

    /**
     * The ReportUrl model constructor.
     * @property {module:model/ReportUrl}
     */
    ReportUrl,

    /**
     * The ReportsCategory model constructor.
     * @property {module:model/ReportsCategory}
     */
    ReportsCategory,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamChannel model constructor.
     * @property {module:model/TeamChannel}
     */
    TeamChannel,

    /**
     * The TeamChannelTab model constructor.
     * @property {module:model/TeamChannelTab}
     */
    TeamChannelTab,

    /**
     * The TeamChannelTabConfiguration model constructor.
     * @property {module:model/TeamChannelTabConfiguration}
     */
    TeamChannelTabConfiguration,

    /**
     * The TeamChannelTabTeamsApp model constructor.
     * @property {module:model/TeamChannelTabTeamsApp}
     */
    TeamChannelTabTeamsApp,

    /**
     * The TeamDiscoverySettings model constructor.
     * @property {module:model/TeamDiscoverySettings}
     */
    TeamDiscoverySettings,

    /**
     * The TeamFunSettings model constructor.
     * @property {module:model/TeamFunSettings}
     */
    TeamFunSettings,

    /**
     * The TeamGuestSettings model constructor.
     * @property {module:model/TeamGuestSettings}
     */
    TeamGuestSettings,

    /**
     * The TeamMemberSettings model constructor.
     * @property {module:model/TeamMemberSettings}
     */
    TeamMemberSettings,

    /**
     * The TeamMembershipPayload model constructor.
     * @property {module:model/TeamMembershipPayload}
     */
    TeamMembershipPayload,

    /**
     * The TeamMessagingSettings model constructor.
     * @property {module:model/TeamMessagingSettings}
     */
    TeamMessagingSettings,

    /**
     * The TeamProvisioningRequest model constructor.
     * @property {module:model/TeamProvisioningRequest}
     */
    TeamProvisioningRequest,

    /**
     * The TeamProvisioningRequestTeam model constructor.
     * @property {module:model/TeamProvisioningRequestTeam}
     */
    TeamProvisioningRequestTeam,

    /**
     * The TeamProvisioningRequestTeamMembership model constructor.
     * @property {module:model/TeamProvisioningRequestTeamMembership}
     */
    TeamProvisioningRequestTeamMembership,

    /**
     * The TeamProvisioningRequestTemplate model constructor.
     * @property {module:model/TeamProvisioningRequestTemplate}
     */
    TeamProvisioningRequestTemplate,

    /**
     * The User1 model constructor.
     * @property {module:model/User1}
     */
    User1,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
    * The ApprovalsApi service constructor.
    * @property {module:api/ApprovalsApi}
    */
    ApprovalsApi,

    /**
    * The AuditTrailsApi service constructor.
    * @property {module:api/AuditTrailsApi}
    */
    AuditTrailsApi,

    /**
    * The JobsApi service constructor.
    * @property {module:api/JobsApi}
    */
    JobsApi,

    /**
    * The MetadataApi service constructor.
    * @property {module:api/MetadataApi}
    */
    MetadataApi,

    /**
    * The MicrosoftTeamsChannelsApi service constructor.
    * @property {module:api/MicrosoftTeamsChannelsApi}
    */
    MicrosoftTeamsChannelsApi,

    /**
    * The MicrosoftTeamsMessagesApi service constructor.
    * @property {module:api/MicrosoftTeamsMessagesApi}
    */
    MicrosoftTeamsMessagesApi,

    /**
    * The MicrosoftTeamsTeamsApi service constructor.
    * @property {module:api/MicrosoftTeamsTeamsApi}
    */
    MicrosoftTeamsTeamsApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:api/ReportsApi}
    */
    ReportsApi,

    /**
    * The SensitivityLabelsApi service constructor.
    * @property {module:api/SensitivityLabelsApi}
    */
    SensitivityLabelsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The TemplatesCatalogApi service constructor.
    * @property {module:api/TemplatesCatalogApi}
    */
    TemplatesCatalogApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi
};
