import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { memo } from 'react'

import type { AccordionProps } from '@mui/material/Accordion'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import type { FC, ReactNode } from 'react'

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
