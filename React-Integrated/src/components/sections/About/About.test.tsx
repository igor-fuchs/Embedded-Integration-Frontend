import About from './About'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key
    })
}))

// Mock styled component
vi.mock('@styles/About', () => ({
    StyleAbout: ({ children, ...props }: any) => <div {...props}>{children}</div>
}))

describe('About Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn()
        })))
        //render(<About />)
    })

    describe('Render', () => {
        beforeEach(() => {
            render(<About />)
        })

        it('Rendering title', () => {
            expect(screen.getByText('AboutTheProject')).toBeInTheDocument()
        })

        it('Rendering description', () => {
            expect(screen.getByText('AboutDescription')).toBeInTheDocument()
        })

        it('Rendering Industrial Integration card', () => {
            expect(screen.getByText('IndustrialIntegration')).toBeInTheDocument()
            expect(screen.getByText('IndustrialIntegrationDescription')).toBeInTheDocument()
        })

        it('Rendering Web Interface card', () => {
            expect(screen.getByText('WebInterface')).toBeInTheDocument()
            expect(screen.getByText('WebInterfaceDescription')).toBeInTheDocument()
        })

        it('Rendering diagram card with flow labels', () => {
            expect(screen.getByText('Factory IO')).toBeInTheDocument()
            expect(screen.getByText('React')).toBeInTheDocument()
            expect(screen.getByText('TIA Portal')).toBeInTheDocument()
        })

        it('Rendering status indicators labels', () => {
            expect(screen.getByText('Simulation')).toBeInTheDocument()
            expect(screen.getByText('Processing')).toBeInTheDocument()
            expect(screen.getByText('Interface')).toBeInTheDocument()
        })

        it('Rendering all images with correct alt text', () => {
            expect(screen.getByAltText('Industrial Icon')).toBeInTheDocument()
            expect(screen.getByAltText('Web Interface Icon')).toBeInTheDocument()
            expect(screen.getByAltText('Logo Embedded Integration')).toBeInTheDocument()
        })
    })

    describe('IntersectionObserver', () => {
        it('Should setup IntersectionObserver on component mount', () => {
            expect(IntersectionObserver).toHaveBeenCalled()
        })

        it('Should call observer.observe when grid ref is available', () => {
            const observeMock = vi.fn()
            vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
                observe: observeMock,
                unobserve: vi.fn(),
                disconnect: vi.fn()
            })))

            expect(observeMock).toHaveBeenCalled()
        })

        it('Should cleanup observer on component unmount', () => {
            const unobserveMock = vi.fn()
            vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
                observe: vi.fn(),
                unobserve: unobserveMock,
                disconnect: vi.fn()
            })))

            const { unmount } = render(<About />)
            unmount()
            expect(unobserveMock).toHaveBeenCalled()
        })
    })

    describe('Animation', () => {
        it('Grid should not have animate class initially', () => {
            const { container } = render(<About />)
            const featuresColumn = container.querySelector('.features-column')
            expect(featuresColumn).toHaveClass('features-column')
            expect(featuresColumn).not.toHaveClass('animate')
        })

        it('Diagram column should not have animate class initially', () => {
            const { container } = render(<About />)
            const diagramColumn = container.querySelector('.diagram-column')
            expect(diagramColumn).toHaveClass('diagram-column')
            expect(diagramColumn).not.toHaveClass('animate')
        })
    })

    describe('Structure', () => {
        it('Should have about-container', () => {
            const { container } = render(<About />)
            expect(container.querySelector('.about-container')).toBeInTheDocument()
        })

        it('Should have about-header with title and description', () => {
            const { container } = render(<About />)
            expect(container.querySelector('.about-header')).toBeInTheDocument()
            expect(container.querySelector('.about-title')).toBeInTheDocument()
            expect(container.querySelector('.about-description')).toBeInTheDocument()
        })

        it('Should have about-grid with features and diagram columns', () => {
            const { container } = render(<About />)
            expect(container.querySelector('.about-grid')).toBeInTheDocument()
            expect(container.querySelector('.features-column')).toBeInTheDocument()
            expect(container.querySelector('.diagram-column')).toBeInTheDocument()
        })

        it('Should have two feature cards', () => {
            const { container } = render(<About />)
            const featureCards = container.querySelectorAll('.feature-card')
            expect(featureCards).toHaveLength(2)
        })

        it('Should have diagram card with flow header, central icon and status indicators', () => {
            const { container } = render(<About />)
            expect(container.querySelector('.diagram-card')).toBeInTheDocument()
            expect(container.querySelector('.flow-header')).toBeInTheDocument()
            expect(container.querySelector('.central-icon-wrapper')).toBeInTheDocument()
            expect(container.querySelector('.status-indicators')).toBeInTheDocument()
        })

        it('Should have three status items', () => {
            const { container } = render(<About />)
            const statusItems = container.querySelectorAll('.status-item')
            expect(statusItems).toHaveLength(3)
        })
    })

    describe('Accessibility', () => {
        it('Section has a semantic heading for About title', () => {
            render(<About />)
            const heading = screen.getByRole('heading', { level: 2 })
            expect(heading).toHaveTextContent('AboutTheProject')
        })

        it('Feature cards have semantic headings', () => {
            render(<About />)
            const headings = screen.getAllByRole('heading', { level: 3 })
            expect(headings.length).toBeGreaterThanOrEqual(2)
        })

        it('Industrial Icon image has alt text', () => {
            render(<About />)
            expect(screen.getByAltText('Industrial Icon')).toBeInTheDocument()
        })

        it('Web Interface Icon image has alt text', () => {
            render(<About />)
            expect(screen.getByAltText('Web Interface Icon')).toBeInTheDocument()
        })

        it('Logo image has alt text', () => {
            render(<About />)
            expect(screen.getByAltText('Logo Embedded Integration')).toBeInTheDocument()
        })

        it('Section should have id attribute for navigation', () => {
            const { container } = render(<About />)
            const aboutSection = container.querySelector('[id="About"]')
            expect(aboutSection).toBeInTheDocument()
        })
    })
})
