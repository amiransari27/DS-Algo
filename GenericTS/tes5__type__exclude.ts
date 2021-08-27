
//type Exclude<T, U> = T extends U ? never : T;

//Explanation
/**
 * 'a' extends 'a' | 'b' ? never : 'a'  => never
 * 'b' extends 'a' | 'b' ? never : 'b'  => never
 * 'c' extends 'a' | 'b' ? never : 'c'  => c
 */
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>



//Explanation for distributive
/**
 * string extends string | number ? string : never  => string
 * number extends string | number ? number : never  => number
 * boolean extends string | number ? boolean : never  => never
 */

type MyType<T> = T extends string | number ? T : never

type MyResultType = MyType<string | number | boolean>



//Explanation for distributive
/**
 * (string| number | boolean) extends (string | number) ? (string | number) : never  => never
 */

type MyType2<T> = [T] extends [string | number] ? T : never

type MyResultType2 = MyType2<string | number | boolean>