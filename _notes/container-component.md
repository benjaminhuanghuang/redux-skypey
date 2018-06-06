In Redux applications, it is a common pattern to split your components into two different directories.

Every component that talks directly to Redux, whether that is to retrieve state from the store, or to dispatch an action, should be moved to a containers directory.

Other components, those that do not talk to Redux, should be moved over to a components directory.

