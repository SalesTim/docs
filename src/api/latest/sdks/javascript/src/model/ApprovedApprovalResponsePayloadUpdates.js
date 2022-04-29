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

import ApiClient from '../ApiClient';

/**
 * The ApprovedApprovalResponsePayloadUpdates model module.
 * @module model/ApprovedApprovalResponsePayloadUpdates
 * @version 2.0.0
 */
class ApprovedApprovalResponsePayloadUpdates {
    /**
     * Constructs a new <code>ApprovedApprovalResponsePayloadUpdates</code>.
     * Updates made by the approver
     * @alias module:model/ApprovedApprovalResponsePayloadUpdates
     */
    constructor() { 
        
        ApprovedApprovalResponsePayloadUpdates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApprovedApprovalResponsePayloadUpdates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApprovedApprovalResponsePayloadUpdates} obj Optional instance to populate.
     * @return {module:model/ApprovedApprovalResponsePayloadUpdates} The populated <code>ApprovedApprovalResponsePayloadUpdates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApprovedApprovalResponsePayloadUpdates();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('welcomeMessage')) {
                obj['welcomeMessage'] = ApiClient.convertToType(data['welcomeMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Updated team name
 * @member {String} name
 */
ApprovedApprovalResponsePayloadUpdates.prototype['name'] = undefined;

/**
 * Updated team description
 * @member {String} description
 */
ApprovedApprovalResponsePayloadUpdates.prototype['description'] = undefined;

/**
 * Updated welcome message
 * @member {String} welcomeMessage
 */
ApprovedApprovalResponsePayloadUpdates.prototype['welcomeMessage'] = undefined;






export default ApprovedApprovalResponsePayloadUpdates;

