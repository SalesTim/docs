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
 * The HookSignature model module.
 * @module model/HookSignature
 * @version 2.0.0
 */
class HookSignature {
    /**
     * Constructs a new <code>HookSignature</code>.
     * A Hook Signature generated from a secret and a payload.
     * @alias module:model/HookSignature
     */
    constructor() { 
        
        HookSignature.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HookSignature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookSignature} obj Optional instance to populate.
     * @return {module:model/HookSignature} The populated <code>HookSignature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HookSignature();

            if (data.hasOwnProperty('@odata.context')) {
                obj['@odata.context'] = ApiClient.convertToType(data['@odata.context'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Odata context
 * @member {String} @odata.context
 */
HookSignature.prototype['@odata.context'] = undefined;

/**
 * Calculated hook signature
 * @member {String} signature
 */
HookSignature.prototype['signature'] = undefined;






export default HookSignature;

