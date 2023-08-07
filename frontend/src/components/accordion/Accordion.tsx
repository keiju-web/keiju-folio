import { FC, ReactNode, memo } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'

type Props = {
  title: string
  children: ReactNode
  accordionProps?: Omit<AccordionProps, 'children'>
  summaryProps?: Omit<AccordionSummaryProps, 'children'>
  detailsProps?: Omit<AccordionDetailsProps, 'children'>
}

const Accordion: FC<Props> = ({ title, children, accordionProps, summaryProps, detailsProps }) => {
  const theme = useTheme() // Get Global Theme

  return (
    <MuiAccordion {...accordionProps} sx={{ bgcolor: 'secondary.light', ...accordionProps?.sx }}>
      <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        {...summaryProps}
        sx={{ borderBottom: '2px solid', borderColor: 'divider', ...summaryProps?.sx }}
      >
        {title}
      </MuiAccordionSummary>
      <MuiAccordionDetails
        {...detailsProps}
        sx={{ '& span': { fontSize: theme.typography.body2.fontSize }, ...detailsProps?.sx }}
      >
        {children}
      </MuiAccordionDetails>
    </MuiAccordion>
  )
}

export default memo(Accordion)
