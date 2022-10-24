import NavbarTwo from '../../components/Layouts/NavbarTwo'
import PageBanner from '../../components/Common/PageBanner'
import ProjectItem from '../../components/Portfolio/ProjectItem'
import CtaAreaTwo from '../../components/Common/CtaAreaTwo'
import { projects } from '../../data/projects'

export default function ProjectDetail({ project }) {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='Project Details' BGImage='bg-three' />

      <ProjectItem project={project} />

      <CtaAreaTwo />
    </>
  )
}

export function getStaticPaths() {
  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps(context) {
  const { id } = context.params

  const projectData = projects.filter((project) => project.id.toString() === id)

  return {
    props: {
      project: projectData[0],
    },
  }
}
