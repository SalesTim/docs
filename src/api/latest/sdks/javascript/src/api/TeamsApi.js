/**
 * nBold API
 * Visit our [API documentation](https://docs.nbold.co/api/get-started) for more information. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import Job from '../model/Job';
import Team from '../model/Team';
import TeamChannel from '../model/TeamChannel';
import TeamChannelTab from '../model/TeamChannelTab';
import TeamMembershipPayload from '../model/TeamMembershipPayload';
import TeamProvisioningRequest from '../model/TeamProvisioningRequest';

/**
* Teams service.
* @module api/TeamsApi
* @version 2.0.0
*/
export default class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTeamMember operation.
     * @callback module:api/TeamsApi~addTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiError} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a team member
     * Add a team member. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {module:model/TeamMembershipPayload} teamMembershipPayload TeamMembershipPayload.
     * @param {module:api/TeamsApi~addTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiError}
     */
    addTeamMember(teamId, teamMembershipPayload, callback) {
      let postBody = teamMembershipPayload;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling addTeamMember");
      }
      // verify the required parameter 'teamMembershipPayload' is set
      if (teamMembershipPayload === undefined || teamMembershipPayload === null) {
        throw new Error("Missing the required parameter 'teamMembershipPayload' when calling addTeamMember");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiError;
      return this.apiClient.callApi(
        '/teams/{teamId}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archiveTeam operation.
     * @callback module:api/TeamsApi~archiveTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive a team
     * Archive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body In the request, you may optionally include the shouldSetSpoSiteReadOnlyForMembers parameter in a JSON body. This optional parameter defines whether to set permissions for team members to read-only on the SharePoint Online site associated with the team. Setting it to false or omitting the body altogether will result in this step being skipped.
     * @param {module:api/TeamsApi~archiveTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    archiveTeam(teamId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling archiveTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/teams/{teamId}/archive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTeamChannel operation.
     * @callback module:api/TeamsApi~createTeamChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamChannel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new team channel
     * Create a new team channel. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {Object.<String, Object>} body A TeamChannelPayload object describing the channel to create.
     * @param {module:api/TeamsApi~createTeamChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamChannel}
     */
    createTeamChannel(teamId, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling createTeamChannel");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeamChannel");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TeamChannel;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTeamChannelTab operation.
     * @callback module:api/TeamsApi~createTeamChannelTabCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamChannelTab} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new team channel tab
     * Create a new team channel tab. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {String} channelId The team channel ID.
     * @param {Object.<String, Object>} body A TeamChannelTabPayload object describing the tab to create.
     * @param {module:api/TeamsApi~createTeamChannelTabCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamChannelTab}
     */
    createTeamChannelTab(teamId, channelId, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling createTeamChannelTab");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling createTeamChannelTab");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeamChannelTab");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TeamChannelTab;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/{channelId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTeamProvisioningJob operation.
     * @callback module:api/TeamsApi~createTeamProvisioningJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new team based on a template
     * Create a new team provisioning job. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {module:model/TeamProvisioningRequest} teamProvisioningRequest A TeamProvisioningRequest object describing the job to execute.
     * @param {module:api/TeamsApi~createTeamProvisioningJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     */
    createTeamProvisioningJob(teamProvisioningRequest, callback) {
      let postBody = teamProvisioningRequest;
      // verify the required parameter 'teamProvisioningRequest' is set
      if (teamProvisioningRequest === undefined || teamProvisioningRequest === null) {
        throw new Error("Missing the required parameter 'teamProvisioningRequest' when calling createTeamProvisioningJob");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Job;
      return this.apiClient.callApi(
        '/teams/provisioning', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTeam operation.
     * @callback module:api/TeamsApi~deleteTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team
     * Delete a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {module:api/TeamsApi~deleteTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTeam(teamId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling deleteTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/teams/{teamId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback module:api/TeamsApi~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team
     * Get detailed information about a team. TIER 3️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {module:api/TeamsApi~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    getTeam(teamId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Team;
      return this.apiClient.callApi(
        '/teams/{teamId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamChannelTabs operation.
     * @callback module:api/TeamsApi~getTeamChannelTabsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamChannelTab>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team channel tabs
     * Get team channel tabs. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {String} channelId The team channel ID.
     * @param {module:api/TeamsApi~getTeamChannelTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamChannelTab>}
     */
    getTeamChannelTabs(teamId, channelId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeamChannelTabs");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getTeamChannelTabs");
      }

      let pathParams = {
        'teamId': teamId,
        'channelId': channelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamChannelTab];
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/{channelId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamChannels operation.
     * @callback module:api/TeamsApi~getTeamChannelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamChannel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team channels
     * Get team channels. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {module:api/TeamsApi~getTeamChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamChannel>}
     */
    getTeamChannels(teamId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeamChannels");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamChannel];
      return this.apiClient.callApi(
        '/teams/{teamId}/channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamPrimaryChannel operation.
     * @callback module:api/TeamsApi~getTeamPrimaryChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamChannel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the primary channel of a team
     * Get the primary channel of a team. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {module:api/TeamsApi~getTeamPrimaryChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamChannel}
     */
    getTeamPrimaryChannel(teamId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeamPrimaryChannel");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TeamChannel;
      return this.apiClient.callApi(
        '/teams/{teamId}/channels/primary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unarchiveTeam operation.
     * @callback module:api/TeamsApi~unarchiveTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unarchive a team
     * Unarchive a team. TIER 1️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {String} teamId The team ID.
     * @param {module:api/TeamsApi~unarchiveTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unarchiveTeam(teamId, callback) {
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling unarchiveTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/teams/{teamId}/unarchive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback module:api/TeamsApi~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team
     * Update a team. TIER 2️⃣ | ROLES - AUTHORIZED_APP, INTEGRATION_MANAGER, GOVERNANCE_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {String} teamId The team ID.
     * @param {Object.<String, Object>} body Supply a JSON representation of team object.
     * @param {module:api/TeamsApi~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateTeam(teamId, body, callback) {
      let postBody = body;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling updateTeam");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/teams/{teamId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
