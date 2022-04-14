import React, { FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from 'react'

interface Props {
  texts: Texts
}

interface Texts {
  default: string
  text1: string
  text2: string
  text3: string
}


const InputGeneric: FunctionComponent<Props> = ( { texts } ) => {
  const [text, setText] = useState( texts.default )

  return (
    <>
      <div className={'homework_wrapper'}>
        <h2>Задание : Generic</h2>

        <select value={text} onChange={e => setText( e.target.value )}>
          {Object.entries( texts ).map( item => (
            <option value={item[ 1 ]}>{item[ 0 ]}</option>
          ) )}
        </select>
        <h2>{text}</h2>
      </div>
    </>
  )
}


//Должно быть

interface PropsEditVersion<T extends BaseSelectDataItem> {
  selectData: Array<T>,
  defaultSelectDataItem?: number,
  inSelectItemRenderKey?: keyof T,
  renderOption?: ( data: T, setSelectItem: React.Dispatch<SetStateAction<T>> ) => ReactNode
}

interface BaseSelectDataItem {
  title: string,
  id: string,
  subTitle?: string,
}

export function InputGenericEditVersion<T extends BaseSelectDataItem>( {
                                                                         selectData,
                                                                         defaultSelectDataItem = 0,
                                                                         inSelectItemRenderKey = 'title',
                                                                         renderOption
                                                                       }: PropsEditVersion<T> ): JSX.Element {
  const [selectItem, setSelectItem] = useState( selectData[ defaultSelectDataItem ] )

  return (
    <>
      <div className={'homework_wrapper'}>
        <h2>Задание: Generic</h2>
        <select
          onChange={( e ) => setSelectItem(
            selectData.find( item => item.id === e.target.value ) || selectData[ defaultSelectDataItem ]
          )}
        >
          {selectData.map( item => (
            <option
              value={item.id}
              onClick={() => {}}
            >
              {renderOption ? renderOption( item, setSelectItem ) : item[ inSelectItemRenderKey ]}
            </option>
          ) )}
        </select>
        <h2>{JSON.stringify( selectItem )}</h2>
      </div>
    </>
  )
}

export default InputGeneric
