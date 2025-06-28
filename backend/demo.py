"""while not dir_accepted:
    DirName = askdirectory()
    if DirName:
        try:
            if os.path.exists(DirName):
            else:
            if dir_accepted:
                JobDirectory.set(DirName)
                JobDirectoryInfo.set(CheckDiskSpace(DirName))
                TheCheck()
                return
        except:
            tkMessageBox.showerror("Error!",
                ("The directory:\n%s\n is not accessible" % DirName))
            JobDirectory.set("")
            JobDirectoryInfo.set("")
            TheCheck()
            return"""