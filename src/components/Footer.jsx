import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-4">
        {/* Top Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Block section */}

          {/* Copyright */}
          <div className="flex-1/2">
            <h2>Created 2023, Modified & Edited 2025</h2>
          </div>

          {/*    LINKS    */}
          <div className="flex-1/2 flex flex-row justify-end">
            <h2> Artem Ramanovich &copy;</h2>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
