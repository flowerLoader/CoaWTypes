/**
 * tGameEnchantment.ts
 * Autogenerated by WaahTool v2.1.1 >:3
 */

import { tGameMain } from "./tGameMain"
export interface tGameEnchantment
{
	/**
	* Unknown
	*/
	parent: tGameMain
	/**
	* Unknown
	*/
	viewData: any
	/**
	* Unknown
	*/
	init(a: any): any
	/**
	* Unknown
	*/
	fromEquipment(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	fromMaterial(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	fromEquipmentMember(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	fromMaterialMember(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	getCanEnchantmentNum(a: any): any
	/**
	* Unknown
	*/
	getUsedEnchantmentNum(a: any): any
	/**
	* Unknown
	*/
	isCanEnchantmentPair(a: any, b: any): any
	/**
	* Unknown
	*/
	getPrice(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	selectEquipment(a: any, b: any): any
	/**
	* Unknown
	*/
	selectMaterial(a: any, b: any): any
	/**
	* Unknown
	*/
	getItemIndex(a: any, b: any): any
	/**
	* Unknown
	*/
	getSuccessRate(a: any, b: any): any
	/**
	* Unknown
	*/
	actEnchantment(): any
	/**
	* Unknown
	*/
	requestEnchantment(): any
	/**
	* Unknown
	*/
	enchantmentResult(a: any, b: any): any
	/**
	* Unknown
	*/
	getExp(a: any, b: any, c: any): any
	/**
	* Unknown
	*/
	rmvEquipment(a: any, b: any): any
}
