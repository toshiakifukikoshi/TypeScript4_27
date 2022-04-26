/* eslint-disable @typescript-eslint/no-unused-vars */

// boolean 真偽値
let bool: boolean = true;

// number　数値
let num: number = 0;

// string 文字列
let str: string = "吹越俊明";

// Array  配列
// ２つの書き方がある(数値が格納されている配列)
let arr1: Array<number> = [1, 2, 3, 4];
let arr2: number[] = [1, 2, 3, 4];

// tuple 配列に入れる型を指定する方法
let tuple: [number, string] = [1, "俊明"];

// any  どれでもOK
let any1: any = false;

// void 返却値の無い関数(書かなくても判別される)
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undfined
let undfined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "俊明" };
// idは数値、名前は文字列と指定できる
