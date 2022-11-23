import { Tools } from "../../store/sloby-tools/slobyToolsSlice"

export type SlobyElement = {
  type?: string
}

export type ExpectedToolActionParameter = {
  tool: keyof Tools ,
}

export type SlobyToolObject = {
  id: number
  tool_name: string
  url: string
  tool: string
}

export type SlobyStateValue = {}