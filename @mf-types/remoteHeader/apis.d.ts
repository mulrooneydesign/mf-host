
    export type RemoteKeys = 'remoteHeader/Header';
    type PackageType<T> = T extends 'remoteHeader/Header' ? typeof import('remoteHeader/Header') :any;