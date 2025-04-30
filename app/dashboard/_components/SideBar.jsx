import React from 'react'

const SideBar = () => {
  return (
    <div
    className={`fixed inset-y-0 left-0 z-40 w-64 bg-card transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <School className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">EduConnect</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t flex justify-end items-center ">
          <UserButton />
      </div>
    </div>
  </div>

  )
}

export default SideBar
