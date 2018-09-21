import parseJSON from './parse_json'

describe('测试 parse_json 方法', () => {
  test(`传入 [name: 'lmm'] 返回 [666]`, () => {
    const result = parseJSON('[]')
    expect(result).toEqual('[]') // eslint-disable-line
  })
})
