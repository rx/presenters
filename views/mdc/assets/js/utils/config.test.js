import VConfig from './config';

const baseConfig = {
    foo: () => {},
    aaa: {
        bbb: {
            ccc: {
                ddd: true,
                eee: undefined,
                fff: 5,
            },
            ggg: 'string',
        },
    },
};
let appConfig;

beforeAll(() => {
    appConfig = new VConfig(baseConfig);
});

test('constructs', () => {
    expect(new VConfig()).toBeInstanceOf(Object);
});

test('get returns a value for a present key', () => {
    expect(appConfig.get('foo')).toBeInstanceOf(Function);
});

test('get returns undefined for an absent key', () => {
    expect(appConfig.get('absent')).toBeUndefined();
    expect(appConfig.get('absent.key')).toBeUndefined();
});

test('get handles nested keys', () => {
    expect(appConfig.get('aaa.bbb.ggg')).toEqual('string');
});

test('get handles empty an empty path', () => {
    expect(appConfig.get('')).toBeUndefined();
});

test('config returns the entire configuration object', () => {
    expect(appConfig.all()).toEqual(baseConfig);
});

test('has returns a truthy value for a present key', () => {
    expect(appConfig.has('foo')).toEqual(true);
});

test('has returns false for an absent key', () => {
    expect(appConfig.has('absent')).toEqual(false);
    expect(appConfig.has('absent.key')).toEqual(false);
});

test('has handles nested keys', () => {
    expect(appConfig.has('aaa.bbb.ggg')).toEqual(true);
    expect(appConfig.has('aaa.bbb.absent')).toEqual(false);
});
