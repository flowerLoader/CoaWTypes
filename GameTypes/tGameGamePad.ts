/**
 * tGameGamePad.ts
 * Autogenerated by WaahTool v2.1.1 >:3
 */

import { tGameMain } from "./tGameMain"
export interface tGameGamePad
{
	/**
	* Unknown
	*/
	parent: tGameMain
	/**
	* Unknown
	*/
	isEnableGamePad: any
	/**
	* Unknown
	*/
	targetGamePadIndex: any
	/**
	* Unknown
	*/
	isSteamInput: any
	/**
	* Unknown
	*/
	steamInputPressedButtons: any
	/**
	* Unknown
	*/
	keymapData: any
	/**
	* Unknown
	*/
	pressedButtons: any
	/**
	* Unknown
	*/
	isBlock: any
	/**
	* Unknown
	*/
	init(): any
	/**
	* Unknown
	*/
	frameAction(a: any): any
	/**
	* Unknown
	*/
	calKey(): any
	/**
	* Unknown
	*/
	loadKeyMap(a: any): any
	/**
	* Unknown
	*/
	clearPressKeys(): any
	/**
	* Unknown
	*/
	isPressedButton(a: any): any
	/**
	* Unknown
	*/
	setBlock(a: any): any
	/**
	* Unknown
	*/
	refreshKeyMap(): any
	/**
	* Unknown
	*/
	setSteamInput(a: any): any
}
