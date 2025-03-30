
export {}


function maskif2y(cc: string): string  {

	if(cc.length <= 4 ) return cc;
	
  let repeatedMask: string =  '#'.repeat(cc.slice(0, -4).length)
  return repeatedMask + cc.slice(-4)

}