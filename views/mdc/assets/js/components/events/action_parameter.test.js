import {expandParam, expandParams} from './action_parameter';

const mockMessage = {
    errors: {},
    snackbar: [],
    warnings: {},
};
const mockPayload = 'hello, world!';
const mockContent = {
    data: mockPayload,
    status: 0,
    message: mockMessage,
};
const mockAction = {
    action: 'posts',
    content: JSON.stringify(mockContent),
    contentType: 'application/json; charset=utf-8',
    method: undefined,
    responseURL: 'https://example.com',
    statusCode: 200
};
const mockResults = [mockAction];
const mockActionParameter = {
    value: ['data'],
    type: 'action_parameter',
    response_index: 0,
};

describe('expandParam', () => {
    test('resolves values of action parameters', () => {
        expect(expandParam(mockResults, mockActionParameter)).toEqual(mockPayload);
    });

    test('passes through objects unaltered', () => {
        expect(expandParam(mockResults, {key: 'value'})).toEqual({key: 'value'});
    });

    test('passes through primitive values unalthered', () => {
        expect(expandParam(mockResults, 4)).toEqual(4);
        expect(expandParam(mockResults, 'string')).toEqual('string');
        expect(expandParam(mockResults, true)).toEqual(true);
        expect(expandParam(mockResults, null)).toEqual(null);
    });
});

describe('expandParams', () => {
    const params = {
        primitive: 'value',
        action: mockActionParameter,
        nested: { integer: 4, action: mockActionParameter },
    };

    test('resolves values of action parameters', () => {
        expect(expandParams(mockResults, params).action).toEqual(mockPayload);
        expect(expandParams(mockResults, params).nested.action).toEqual(mockPayload);
    });

    test('passes through primitive values unalthered', () => {
        expect(expandParams(mockResults, params).primitive).toEqual('value');
        expect(expandParams(mockResults, params).nested.integer).toEqual(4);
    });
});
