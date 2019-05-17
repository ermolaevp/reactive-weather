export function compose(...funcs: any[]) {
  return funcs.reduce(
    (a, b) => (...args: any[]) => a(b(...args)),
    (arg: any) => arg,
  )
}
