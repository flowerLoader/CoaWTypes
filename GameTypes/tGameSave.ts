/**
 * tGameSave.ts
 * Autogenerated by WaahTool v2.1.1 >:3
 */

import { tGameMain } from "./tGameMain"
export interface tGameSave
{
	/**
	* Unknown
	*/
	parent: tGameMain
	/**
	* Unknown
	*/
	saveNumber: any
	/**
	* Unknown
	*/
	saveMaxNum: any
	/**
	* Unknown
	*/
	separate: any
	/**
	* Unknown
	*/
	downloadLink: any
	/**
	* Unknown
	*/
	importData: any
	/**
	* Unknown
	*/
	gcDefKey: any
	/**
	* Unknown
	*/
	headerData: any
	/**
	* Unknown
	*/
	gzipWorker: any
	/**
	* Unknown
	*/
	gunzipWorker: any
	/**
	* Unknown
	*/
	gzipCallBack: any
	/**
	* Unknown
	*/
	gunzipCallBack: any
	/**
	* Unknown
	*/
	init(a: any): any
	/**
	* Unknown
	*/
	setSaveNumber(a: any): any
	/**
	* Unknown
	*/
	getHeaderData(a: any): any
	/**
	* Unknown
	*/
	convertSaveData(a: any): any
	/**
	* Unknown
	*/
	zipData(a: any): any
	/**
	* Unknown
	*/
	zipDataWorker(a: any, b: any): any
	/**
	* Unknown
	*/
	unzipData(a: any): any
	/**
	* Unknown
	*/
	unzipDataWorker(a: any, b: any): any
	/**
	* Unknown
	*/
	initSaveData(): any
	/**
	* Unknown
	*/
	getSaveData(): any
	/**
	* Unknown
	*/
	getSaveKey(a: any): any
	/**
	* Unknown
	*/
	removeSaveData(a: any, b: any): any
	/**
	* Unknown
	*/
	save(a: any, b: any): any
	/**
	* Unknown
	*/
	saveSuspended(a: any): any
	/**
	* Unknown
	*/
	saveAndDownload(a: any): any
	/**
	* Unknown
	*/
	getSaveHeaders(a: any): any
	/**
	* Unknown
	*/
	splitSaveData(a: any): any
	/**
	* Unknown
	*/
	loadAct(a: any, b: any, c: any, d: any): any
	/**
	* Unknown
	*/
	loadSuspended(a: any, b: any): any
	/**
	* Unknown
	*/
	load(a: any, b: any): any
	/**
	* Unknown
	*/
	convertBase64ToUint8Array(a: any): any
	/**
	* Unknown
	*/
	getFileData(a: any): any
	/**
	* Unknown
	*/
	localstorageSetItem(a: any, b: any, c: any): any
	/**
	* Unknown
	*/
	localstorageGetItem(a: any, b: any): any
	/**
	* Unknown
	*/
	localstorageGetItemHeader(a: any, b: any): any
	/**
	* Unknown
	*/
	localstorageRemoveItem(a: any, b: any): any
	/**
	* Unknown
	*/
	localstorageGetKeys(a: any): any
	/**
	* Unknown
	*/
	setClearData(a: any, b: any): any
	/**
	* Unknown
	*/
	exportLocalStorageData(a: any): any
	/**
	* Unknown
	*/
	importLocalStorageData(a: any, b: any): any
	/**
	* Unknown
	*/
	selectImportLocalStorageDataFile(a: any): any
	/**
	* Unknown
	*/
	clearImportLocalStorageDataFile(a: any): any
	/**
	* Unknown
	*/
	selectedImportLocalStorageDataFile(a: any): any
}
