import { 
  Tooltip,
  TooltipContent,
  TooltipProvider

} from "@radix-ui/react-tooltip"
import { TooltipTrigger } from "@radix-ui/react-tooltip";


interface CopyPaletteProps{
  colors: {color: string; text: string}[];

}

function SavePalette() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              aria-label="copy palette"
              size={"sm"}
              variant={"outline"}
              onClick={handlerClick}
              className="ml-2 rounded-[4px]"
            >
              <Copy></Copy>
            </Button>
          </TooltipTrigger>
        <TooltipContent className="rounded-[4px]">
          <p className="text-[12px]">Copy palette</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SavePalette