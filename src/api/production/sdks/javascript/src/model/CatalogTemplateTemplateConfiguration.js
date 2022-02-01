/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.3
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CatalogTemplateTemplateConfigurationApproval from './CatalogTemplateTemplateConfigurationApproval';
import CatalogTemplateTemplateConfigurationAudienceTargeting from './CatalogTemplateTemplateConfigurationAudienceTargeting';
import CatalogTemplateTemplateConfigurationPermanentMembership from './CatalogTemplateTemplateConfigurationPermanentMembership';

/**
 * The CatalogTemplateTemplateConfiguration model module.
 * @module model/CatalogTemplateTemplateConfiguration
 * @version 1.2.3
 */
class CatalogTemplateTemplateConfiguration {
    /**
     * Constructs a new <code>CatalogTemplateTemplateConfiguration</code>.
     * Information about the template and its related policies
     * @alias module:model/CatalogTemplateTemplateConfiguration
     */
    constructor() { 
        
        CatalogTemplateTemplateConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogTemplateTemplateConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogTemplateTemplateConfiguration} obj Optional instance to populate.
     * @return {module:model/CatalogTemplateTemplateConfiguration} The populated <code>CatalogTemplateTemplateConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogTemplateTemplateConfiguration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('pictureUrl')) {
                obj['pictureUrl'] = ApiClient.convertToType(data['pictureUrl'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('singleton')) {
                obj['singleton'] = ApiClient.convertToType(data['singleton'], 'String');
            }
            if (data.hasOwnProperty('domId')) {
                obj['domId'] = ApiClient.convertToType(data['domId'], 'String');
            }
            if (data.hasOwnProperty('approval')) {
                obj['approval'] = CatalogTemplateTemplateConfigurationApproval.constructFromObject(data['approval']);
            }
            if (data.hasOwnProperty('permanentMembership')) {
                obj['permanentMembership'] = CatalogTemplateTemplateConfigurationPermanentMembership.constructFromObject(data['permanentMembership']);
            }
            if (data.hasOwnProperty('audienceTargeting')) {
                obj['audienceTargeting'] = CatalogTemplateTemplateConfigurationAudienceTargeting.constructFromObject(data['audienceTargeting']);
            }
        }
        return obj;
    }


}

/**
 * Template ID.
 * @member {String} id
 */
CatalogTemplateTemplateConfiguration.prototype['id'] = undefined;

/**
 * Template Name.
 * @member {String} name
 */
CatalogTemplateTemplateConfiguration.prototype['name'] = undefined;

/**
 * Template Description.
 * @member {String} description
 */
CatalogTemplateTemplateConfiguration.prototype['description'] = undefined;

/**
 * Template Picture URL.
 * @member {String} pictureUrl
 */
CatalogTemplateTemplateConfiguration.prototype['pictureUrl'] = undefined;

/**
 * Template Language (e.g. 'en-US').
 * @member {String} language
 */
CatalogTemplateTemplateConfiguration.prototype['language'] = undefined;

/**
 * Defines if the template is enabled or not, and therefore available for end-users or not.
 * @member {String} enabled
 */
CatalogTemplateTemplateConfiguration.prototype['enabled'] = undefined;

/**
 * Defines if the template should be considered as 'system', and therefore could not be deleted, exported...
 * @member {String} system
 */
CatalogTemplateTemplateConfiguration.prototype['system'] = undefined;

/**
 * Defines if the template should restrict the number of associated teams created from itself to one.
 * @member {String} singleton
 */
CatalogTemplateTemplateConfiguration.prototype['singleton'] = undefined;

/**
 * Unique identifier that could be used safely client-side to identify an HTML tag.
 * @member {String} domId
 */
CatalogTemplateTemplateConfiguration.prototype['domId'] = undefined;

/**
 * @member {module:model/CatalogTemplateTemplateConfigurationApproval} approval
 */
CatalogTemplateTemplateConfiguration.prototype['approval'] = undefined;

/**
 * @member {module:model/CatalogTemplateTemplateConfigurationPermanentMembership} permanentMembership
 */
CatalogTemplateTemplateConfiguration.prototype['permanentMembership'] = undefined;

/**
 * @member {module:model/CatalogTemplateTemplateConfigurationAudienceTargeting} audienceTargeting
 */
CatalogTemplateTemplateConfiguration.prototype['audienceTargeting'] = undefined;






export default CatalogTemplateTemplateConfiguration;

