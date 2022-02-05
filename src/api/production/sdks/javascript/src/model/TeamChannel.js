/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://docs.nbold.co/api/) for more information. 
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

/**
 * The TeamChannel model module.
 * @module model/TeamChannel
 * @version 1.2.3
 */
class TeamChannel {
    /**
     * Constructs a new <code>TeamChannel</code>.
     * Channel of a Microsoft Teams team.
     * @alias module:model/TeamChannel
     */
    constructor() { 
        
        TeamChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamChannel} obj Optional instance to populate.
     * @return {module:model/TeamChannel} The populated <code>TeamChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamChannel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdDateTime')) {
                obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('membershipType')) {
                obj['membershipType'] = ApiClient.convertToType(data['membershipType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Team Channel ID
 * @member {String} id
 */
TeamChannel.prototype['id'] = undefined;

/**
 * Team Channel Created Date Time
 * @member {String} createdDateTime
 */
TeamChannel.prototype['createdDateTime'] = undefined;

/**
 * Team Channel Display Name
 * @member {String} displayName
 */
TeamChannel.prototype['displayName'] = undefined;

/**
 * Team Channel Description
 * @member {String} description
 */
TeamChannel.prototype['description'] = undefined;

/**
 * Team Channel Membership Type
 * @member {String} membershipType
 */
TeamChannel.prototype['membershipType'] = undefined;






export default TeamChannel;

