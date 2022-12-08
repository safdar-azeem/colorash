import { lazy } from 'react'
import { Frame } from '../jsons/frameOpetions.json'

const UintyWebTemplate = lazy(() => import('./website/Unity'))
const MalikoWebTemplate = lazy(() => import('./website/Maliko'))
const Folio = lazy(() => import('./website/Folio'))
const RocketX = lazy(() => import('./website/RocketX'))

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
			component: (props: any) => <RocketX {...props} />,
			colors: ['#1B867F', '#E1E0FF', '#FFE4B0', '#C3EDFF'],
			backDropColor: '#D0E2F2',
		},
		'2': {
			component: (props: any) => <MalikoWebTemplate {...props} />,
			colors: ['#E29044', '#D6E3DD'],
			backDropColor: '#E5E0DA',
		},
		'3': {
			component: (props: any) => <Folio {...props} />,
			colors: ['#448ACA'],
			backDropColor: '#d6e2e5',
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
