'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Briefcase, Cpu, Mail, User, Github, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from './ContactForm'
import { CustomCursor, LiveBackground, LoadingSpinner } from './AnimationComponents'
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
}

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: process.env.NEXT_PUBLIC_GITHUB || '', icon: <Github className="w-5 h-5" /> },
  { name: 'Instagram', url: process.env.NEXT_PUBLIC_INSTAGRAM || '', icon: <Instagram className="w-5 h-5" /> },
  { name: 'LinkedIn', url: process.env.NEXT_PUBLIC_LINKEDIN || '', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', url: process.env.NEXT_PUBLIC_FACEBOOK || '', icon: <Facebook className="w-5 h-5" /> },
  { name: 'YouTube', url: process.env.NEXT_PUBLIC_YOUTUBE || '', icon: <Youtube className="w-5 h-5" /> },
];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setTimeout(() => setLoading(false), 2000)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <CustomCursor />
      <LiveBackground />
      <div className="min-h-screen">
        <header className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <motion.h1
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Sagor Munshi
                </motion.h1>
                <motion.p
                  className="text-xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Mechanical Engineer
                </motion.p>
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-secondary transition-colors"
                    >
                      {link.icon}
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img
                  src="/images/sagor.svg?height=200&width=200"
                  alt="Sagor Munshi"
                  className="rounded-full border-4 border-primary-foreground"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <User className="mr-2" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  I'm Sagor Munshi, a Mechanical Engineer with a passion for problem-solving and innovation. With experience in designing efficient mechanical systems and a growing interest in web development, I love merging technical skills with creativity to build practical solutions. I'm always eager to learn and take on new challenges that push the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Cpu className="mr-2" /> Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="technical">
                    <AccordionTrigger>Technical Skills</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-2">
                        <li>Mechanical Design and Analysis</li>
                        <li>CAD Proficiency (SolidWorks, AutoCAD)</li>
                        <li>Manufacturing Processes</li>
                        <li>Thermodynamics</li>
                        <li>Materials Science</li>
                        <li>Control Systems</li>
                        <li>FEA (ANSYS)</li>
                        <li>3D Printing</li>
                        <li>MATLAB</li>
                        <li>GD&T</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="analytical">
                    <AccordionTrigger>Analytical & Practical Skills</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-2">
                        <li>Problem-Solving</li>
                        <li>Critical Thinking</li>
                        <li>Laboratory Skills</li>
                        <li>Hands-On Experience</li>
                        <li>Data Analysis</li>
                        <li>Experimental Design</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="soft">
                    <AccordionTrigger>Soft Skills & Industry Knowledge</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-2">
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Project Management</li>
                        <li>Understanding of Industry Standards</li>
                        <li>Exposure to Real-World Applications</li>
                        <li>Technical Writing</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="mr-2" /> Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Mail className="mr-2" /> Contact Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Sagor Munshi. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
