import { FC, createContext, useReducer, Dispatch, Reducer } from 'react'

interface IFilterState {
  category: string
  subcategory: string
  province: string
  priceLevel: number
  word: string
  search: string
  sideShow: boolean
}

interface IFilterContext {
  state: IFilterState
  dispatch: Dispatch<Partial<IFilterState>>
}

interface IFilterProviderProp {
  children: any
}

export const FilterContext = createContext<IFilterContext>({
  state: null,
  dispatch: () => null,
})

const initState: IFilterState = {
  category: null,
  subcategory: null,
  province: null,
  priceLevel: null,
  word: '',
  search: null,
  sideShow: false
}

const reducer: Reducer<IFilterState, Partial<IFilterState>> = (
  prev,
  current
) => {
  return {
    ...prev,
    ...current,
  }
}

export const FilterProvider: FC<IFilterProviderProp> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}
