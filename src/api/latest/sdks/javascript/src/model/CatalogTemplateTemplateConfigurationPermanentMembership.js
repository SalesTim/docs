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

import ApiClient from '../ApiClient';
import PermanentMember from './PermanentMember';

/**
 * The CatalogTemplateTemplateConfigurationPermanentMembership model module.
 * @module model/CatalogTemplateTemplateConfigurationPermanentMembership
 * @version 2.0.0
 */
class CatalogTemplateTemplateConfigurationPermanentMembership {
    /**
     * Constructs a new <code>CatalogTemplateTemplateConfigurationPermanentMembership</code>.
     * The template permanent membership policy.
     * @alias module:model/CatalogTemplateTemplateConfigurationPermanentMembership
     */
    constructor() { 
        
        CatalogTemplateTemplateConfigurationPermanentMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogTemplateTemplateConfigurationPermanentMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogTemplateTemplateConfigurationPermanentMembership} obj Optional instance to populate.
     * @return {module:model/CatalogTemplateTemplateConfigurationPermanentMembership} The populated <code>CatalogTemplateTemplateConfigurationPermanentMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogTemplateTemplateConfigurationPermanentMembership();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [PermanentMember]);
            }
            if (data.hasOwnProperty('owners')) {
                obj['owners'] = ApiClient.convertToType(data['owners'], [PermanentMember]);
            }
        }
        return obj;
    }


}

/**
 * Members of a permanent membership team, as an array of PermanentMember. See [https://docs.nbold.co/api/latest/reference/Models/PermanentMember](https://docs.nbold.co/api/latest/reference/Models/PermanentMember) for more information.
 * @member {Array.<module:model/PermanentMember>} members
 */
CatalogTemplateTemplateConfigurationPermanentMembership.prototype['members'] = undefined;

/**
 * Members of a permanent membership team, as an array of PermanentMember. See [https://docs.nbold.co/api/latest/reference/Models/PermanentMember](https://docs.nbold.co/api/latest/reference/Models/PermanentMember) for more information.
 * @member {Array.<module:model/PermanentMember>} owners
 */
CatalogTemplateTemplateConfigurationPermanentMembership.prototype['owners'] = undefined;






export default CatalogTemplateTemplateConfigurationPermanentMembership;

