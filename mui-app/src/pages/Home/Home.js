import Page from 'material-ui-shell/lib/containers/Page'
import React, {useState} from 'react'
//import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
//import { useIntl } from 'react-intl'
import Clips from '../../components/Clips/Clips'
import ClipEvents from '../../components/Clips/ClipEvents'

const HomePage = () => {
    // eslint-disable-next-line no-unused-vars
  const [selectedClip, setSelectedClip] = useState(null);
  //const intl = useIntl()

  return (
      <Page>
        <Clips setSelectedClip={setSelectedClip}/>
        <ClipEvents selectedClip={selectedClip}/>
      </Page>
  )
}

export default HomePage

// <Page pageTitle={intl.formatMessage({ id: 'home' })}>
//   <Scrollbar
//     style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
//   >
//     {intl.formatMessage({ id: 'home' })}
//   </Scrollbar>
//
//
// </Page>
