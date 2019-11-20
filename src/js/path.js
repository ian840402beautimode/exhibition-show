const viewPath = {
    adminLogin: {
        dev: /^login.html$/,
        pro: /^admin\/login$/,
    },
    adminIndexEdit: {
        dev: /^backend-index-edit.html$/,
        pro: /^admin\/index\/edit$/,
    },
    adminSystem: {
        dev: /^backend-system-edit.html$/,
        pro: /^admin\/system\/edit$/,
    },
}

export { viewPath };