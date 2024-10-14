import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you would fetch this data from a database.
const projects = [
  {
    id: 1,
    title: "Automated Assembly Line Optimization",
    description: "Designed and implemented improvements to an automotive assembly line, resulting in a 20% increase in efficiency.",
    technologies: ["SolidWorks", "AutoCAD", "PLC Programming"]
  },
  {
    id: 2,
    title: "Lightweight Drone Frame Design",
    description: "Engineered a carbon fiber drone frame that reduced weight by 30% while maintaining structural integrity.",
    technologies: ["CAD", "FEA", "Carbon Fiber Composites"]
  },
  {
    id: 3,
    title: "Smart HVAC Control System",
    description: "Developed an IoT-based HVAC control system for commercial buildings, reducing energy consumption by 25%.",
    technologies: ["MATLAB", "Thermodynamics", "IoT"]
  },
  {
    id: 4,
    title: "Biomedical Implant Prototyping",
    description: "Led the rapid prototyping of a novel orthopedic implant using additive manufacturing techniques.",
    technologies: ["3D Printing", "Biomaterials", "GD&T"]
  }
]

export async function GET() {
  return NextResponse.json(projects)
}
