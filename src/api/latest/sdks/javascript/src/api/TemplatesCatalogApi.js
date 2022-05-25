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
import CatalogTemplate from '../model/CatalogTemplate';
import CatalogTemplates from '../model/CatalogTemplates';
import PermanentMember from '../model/PermanentMember';
import PermanentMembership from '../model/PermanentMembership';

/**
* TemplatesCatalog service.
* @module api/TemplatesCatalogApi
* @version 2.0.0
*/
export default class TemplatesCatalogApi {

    /**
    * Constructs a new TemplatesCatalogApi. 
    * @alias module:api/TemplatesCatalogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCatalogTemplates operation.
     * @callback module:api/TemplatesCatalogApi~getCatalogTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get teams templates
     * Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {module:api/TemplatesCatalogApi~getCatalogTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplates}
     */
    getCatalogTemplates(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = CatalogTemplates;
      return this.apiClient.callApi(
        '/catalog/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMicrosoftTeamsTeamTemplate operation.
     * @callback module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Microsoft Teams team template
     * Get a Microsoft Teams team template by its ID
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplate}
     */
    getMicrosoftTeamsTeamTemplate(templateId, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getMicrosoftTeamsTeamTemplate");
      }

      let pathParams = {
        'template_id': templateId
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
      let returnType = CatalogTemplate;
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMicrosoftTeamsTeamTemplatePermanentMembership operation.
     * @callback module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplatePermanentMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermanentMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permanent members and owners of a Microsoft Teams team template
     * Get permanent members and owners of a Microsoft Teams team template
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplatePermanentMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermanentMembership}
     */
    getMicrosoftTeamsTeamTemplatePermanentMembership(templateId, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getMicrosoftTeamsTeamTemplatePermanentMembership");
      }

      let pathParams = {
        'template_id': templateId
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
      let returnType = PermanentMembership;
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}/permanent_membership', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMicrosoftTeamsTeamTemplatePermanentMembershipByRole operation.
     * @callback module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplatePermanentMembershipByRoleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PermanentMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permanent members and owners of a Microsoft Teams team template
     * Get permanent members or owners of a Microsoft Teams team template
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {String} role The Microsoft Teams ownership role (owners / members)
     * @param {module:api/TemplatesCatalogApi~getMicrosoftTeamsTeamTemplatePermanentMembershipByRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PermanentMember>}
     */
    getMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getMicrosoftTeamsTeamTemplatePermanentMembershipByRole");
      }
      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling getMicrosoftTeamsTeamTemplatePermanentMembershipByRole");
      }

      let pathParams = {
        'template_id': templateId,
        'role': role
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
      let returnType = [PermanentMember];
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}/permanent_membership/{role}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyCatalogTemplates operation.
     * @callback module:api/TemplatesCatalogApi~getMyCatalogTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my teams templates
     * Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {module:api/TemplatesCatalogApi~getMyCatalogTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplates}
     */
    getMyCatalogTemplates(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = CatalogTemplates;
      return this.apiClient.callApi(
        '/me/catalog/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMicrosoftTeamsTeamTemplate operation.
     * @callback module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a Microsoft Teams team template
     * Set a Microsoft Teams team template by its ID
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {module:model/CatalogTemplate} catalogTemplate A JSON representation of a Microsoft Teams team template.
     * @param {module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplate}
     */
    setMicrosoftTeamsTeamTemplate(templateId, catalogTemplate, callback) {
      let postBody = catalogTemplate;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling setMicrosoftTeamsTeamTemplate");
      }
      // verify the required parameter 'catalogTemplate' is set
      if (catalogTemplate === undefined || catalogTemplate === null) {
        throw new Error("Missing the required parameter 'catalogTemplate' when calling setMicrosoftTeamsTeamTemplate");
      }

      let pathParams = {
        'template_id': templateId
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
      let returnType = CatalogTemplate;
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMicrosoftTeamsTeamTemplatePermanentMembership operation.
     * @callback module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplatePermanentMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermanentMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set permanent members and owners of a Microsoft Teams team template
     * Set permanent members and owners of a Microsoft Teams team template
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {module:model/PermanentMembership} permanentMembership A JSON representation of a Microsoft Teams team template permanent membership settings.
     * @param {module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplatePermanentMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermanentMembership}
     */
    setMicrosoftTeamsTeamTemplatePermanentMembership(templateId, permanentMembership, callback) {
      let postBody = permanentMembership;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling setMicrosoftTeamsTeamTemplatePermanentMembership");
      }
      // verify the required parameter 'permanentMembership' is set
      if (permanentMembership === undefined || permanentMembership === null) {
        throw new Error("Missing the required parameter 'permanentMembership' when calling setMicrosoftTeamsTeamTemplatePermanentMembership");
      }

      let pathParams = {
        'template_id': templateId
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
      let returnType = PermanentMembership;
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}/permanent_membership', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMicrosoftTeamsTeamTemplatePermanentMembershipByRole operation.
     * @callback module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplatePermanentMembershipByRoleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PermanentMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set permanent members and owners of a Microsoft Teams team template
     * Set permanent members or owners of a Microsoft Teams team template
     * @param {String} templateId The Microsoft Teams team template ID
     * @param {String} role The Microsoft Teams ownership role (owners / members)
     * @param {Array.<module:model/PermanentMember>} permanentMember A JSON representation of a Microsoft Teams team template permanent members.
     * @param {module:api/TemplatesCatalogApi~setMicrosoftTeamsTeamTemplatePermanentMembershipByRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PermanentMember>}
     */
    setMicrosoftTeamsTeamTemplatePermanentMembershipByRole(templateId, role, permanentMember, callback) {
      let postBody = permanentMember;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling setMicrosoftTeamsTeamTemplatePermanentMembershipByRole");
      }
      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling setMicrosoftTeamsTeamTemplatePermanentMembershipByRole");
      }
      // verify the required parameter 'permanentMember' is set
      if (permanentMember === undefined || permanentMember === null) {
        throw new Error("Missing the required parameter 'permanentMember' when calling setMicrosoftTeamsTeamTemplatePermanentMembershipByRole");
      }

      let pathParams = {
        'template_id': templateId,
        'role': role
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
      let returnType = [PermanentMember];
      return this.apiClient.callApi(
        '/catalog/templates/{template_id}/permanent_membership/{role}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
