/**
 * tGameEvent.ts
 * Autogenerated by WaahTool v2.1.1 >:3
 */

import { tGameMain } from "./tGameMain"
export interface tGameEvent
{
	/**
	* Unknown
	*/
	parent: tGameMain
	/**
	* Unknown
	*/
	eventDatas: any
	/**
	* Unknown
	*/
	init(a: any): any
	/**
	* Unknown
	*/
	loadEvent(a: any, b: any): any
	/**
	* Unknown
	*/
	eventAffectCharactor(a: any, b: any, c: any): any
	/**
	* Unknown
	*/
	checkChangeMapEvent(): any
	/**
	* Unknown
	*/
	changeMapEvent(a: any, b: any): any
	/**
	* Unknown
	*/
	addAffectNonBattleAnswers(a: any): any
	/**
	* Unknown
	*/
	addAffectNonBattleAnswers_kenkyu(a: any): any
	/**
	* Unknown
	*/
	addAffectNonBattleAnswers_magicalgirl(a: any): any
	/**
	* Unknown
	*/
	knockDown(a: any, b: any, c: any): any
	/**
	* Unknown
	*/
	viewMap(a: any): any
	/**
	* Unknown
	*/
	dropItem(a: any): any
	/**
	* Unknown
	*/
	oneActionFinishAction(a: any, b: any, c: any): any
	/**
	* Unknown
	*/
	revivalEventCharas(a: any): any
}
