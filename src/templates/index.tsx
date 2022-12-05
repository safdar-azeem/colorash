import { lazy } from 'react'
import { Frame } from '../Json/frameOpetions.json'

const UintyWebTemplate = lazy(() => import('./web/Unity'))
const MalikoWebTemplate = lazy(() => import('./web/Maliko'))
const Folio = lazy(() => import('./web/Folio'))

type TemplateProps = {
	[key in Frame]: {
		[key: string]: {
			component: (props: any) => JSX.Element
			colors: string[]
			backDropColor: string
		}
	}
}

const templates: TemplateProps = {
	Website: {
		'0': {
			component: (props: any) => <UintyWebTemplate {...props} />,
			colors: ['#6C61D0', '#F7E0EB', '#A0D7E7'],
			backDropColor: '#ebedef',
		},
		'1': {
			component: (props: any) => <MalikoWebTemplate {...props} />,
			colors: ['#E29044', '#D6E3DD'],
			backDropColor: '#E5E0DA',
		},
		'2': {
			component: (props: any) => <Folio {...props} />,
			colors: ['#448ACA'],
			backDropColor: '#E5E0DA',
		},
	},
	Mobile: {},
	Brochure: {},
	logo: {},
	branding: {},
	social: {},
	illustration: {},
}

export default templates
