import isArray from './is_array'
describe('测试 isArray 方法', () => {
  test('传入 666 返回 [666]', () => {
    const result = isArray(666)
    expect(result).toEqual([666]) // eslint-disable-line
  })
})
