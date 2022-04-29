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
import ApprovedApprovalResponsePayloadApprover from './ApprovedApprovalResponsePayloadApprover';
import ApprovedApprovalResponsePayloadUpdates from './ApprovedApprovalResponsePayloadUpdates';

/**
 * The ApprovedApprovalResponsePayload model module.
 * @module model/ApprovedApprovalResponsePayload
 * @version 2.0.0
 */
class ApprovedApprovalResponsePayload {
    /**
     * Constructs a new <code>ApprovedApprovalResponsePayload</code>.
     * A positive approval response payload.
     * @alias module:model/ApprovedApprovalResponsePayload
     */
    constructor() { 
        
        ApprovedApprovalResponsePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApprovedApprovalResponsePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApprovedApprovalResponsePayload} obj Optional instance to populate.
     * @return {module:model/ApprovedApprovalResponsePayload} The populated <code>ApprovedApprovalResponsePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApprovedApprovalResponsePayload();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('approver')) {
                obj['approver'] = ApprovedApprovalResponsePayloadApprover.constructFromObject(data['approver']);
            }
            if (data.hasOwnProperty('updates')) {
                obj['updates'] = ApprovedApprovalResponsePayloadUpdates.constructFromObject(data['updates']);
            }
        }
        return obj;
    }


}

/**
 * Approval response message
 * @member {String} message
 */
ApprovedApprovalResponsePayload.prototype['message'] = undefined;

/**
 * @member {module:model/ApprovedApprovalResponsePayloadApprover} approver
 */
ApprovedApprovalResponsePayload.prototype['approver'] = undefined;

/**
 * @member {module:model/ApprovedApprovalResponsePayloadUpdates} updates
 */
ApprovedApprovalResponsePayload.prototype['updates'] = undefined;






export default ApprovedApprovalResponsePayload;

