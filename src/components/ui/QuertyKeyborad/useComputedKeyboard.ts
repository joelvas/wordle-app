import React from 'react'
const keys =
  'Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Ñ,ENTER,Z,X,C,V,B,N,M,DELETE'

const useComputedKeyborad = () => {
  const rows = React.useMemo(() => {
    const arrKeys = keys.split(',')
    const row1 = arrKeys.slice(0, 10)
    const row2 = arrKeys.slice(10, 20)
    const row3 = arrKeys.slice(20, 29)
    const rows = [row1, row2, row3]
    return rows
  }, [])

  return { rows }
}
export default useComputedKeyborad
