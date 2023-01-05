import { nanoid } from 'nanoid'
import create from 'zustand'
const startingHouse = [{key: "hFJfwtfjVFWsqDr2UgYkk", pos: [19, 0, 13], texture: "grass"},

{key: "hFJfwtfjVFWsqDr2UgYkk", pos: [19, 0, 13], texture: "grass"},

{key: "p3UXG2O54uVR_s2V9AIgf", pos: [19, 0, 13], texture: "grass"},
 
{key: "FA_NMXmQy1miwzxAE0esU", pos: [19, 0, 12], texture: "grass"},

{key: "rAAdaEATNaOp01lz3HObc", pos: [20, 0, 12], texture: "grass"},

{key: "4t8l11U0oXC2HdGh6m9nx", pos: [19, 0, 11], texture: "grass"},

{key: "1YpPMNkof6TPMKzq797-5", pos: [20, 0, 12], texture: "grass"},

{key: "CckqztxeSbrpzHvxNLad3", pos: [20, 0, 11], texture: "grass"},

{key: "cSGmsFWslsWzIze2_vw0e", pos: [20, 0, 11], texture: "grass"},
 
{key: "nCqSHK3dP_gjwtzKkeKBR", pos: [20, 0, 11], texture: "grass"},
 
{key: "UCTUbR2eDfvR8dWCnAHLb", pos: [20, 0, 10], texture: "grass"},

{key: "VAaet9b3X-rHvhJPOr49_", pos: [20, 0, 9], texture: "grass"},

{key: "-CNMiI04cP-g9IAiojnc_", pos: [20, 0, 8], texture: "grass"},

{key: "rDOp93GeMBaUalK_YncOl", pos: [20, 0, 7], texture: "grass"},

{key: "xoqOY8ajrrbJF7lg_-eBA", pos: [20, 0, 7], texture: "grass"},
 
{key: "1KOX4ciZiXsy9YnrEhSId", pos: [18, 0, 13], texture: "grass"},

{key: "SDWV_NxxLAPxMb-hVPQZ4", pos: [18, 0, 12], texture: "grass"},

{key: "xoSyijZP2GykKVjitpiCi", pos: [18, 0, 12], texture: "grass"},

{key: "jmULlCmU9JM7EOnVXvyaD", pos: [17, 0, 11], texture: "grass"},

{key: "zFtwIXXDmu5AriXmaJZpY", pos: [16, 0, 11], texture: "grass"},

{key: "h-V7Fs2lHFBBWJR5BjG7h", pos: [16, 0, 10], texture: "grass"},
 
{key: "wFMYXM7QkHNW-hag5MBNh", pos: [15, 0, 10], texture: "grass"},

{key: "Wn0beN5t8XRCfFUtcfZDq", pos: [16, 0, 9], texture: "grass"},

{key: "kvjynUUIAjjAayBuKFehy", pos: [18, 0, 10], texture: "grass"},
 
{key: "MsZd-3qwrTyAqNrtBEgqL", pos: [17, 0, 10], texture: "grass"},

{key: "eTNnmilKlk_GSEL-ymKJS", pos: [18, 0, 10], texture: "grass"},

{key: "_bb3_JOXDBwbco3U6gUFF", pos: [16, 0, 8], texture: "grass"},

{key: "bSd_KnPIU2QxOF8jFrnlJ", pos: [16, 0, 7], texture: "grass"},

{key: "4kfI4lJ3B-mQegbSkYteM", pos: [16, 0, 10], texture: "grass"},

{key: "99HSrA6T5hjxhzdFZ1FSB", pos: [15, 0, 9], texture: "grass"},

{key: "9JhoN-E2-VRbPxppAFR5V", pos: [15, 0, 8], texture: "grass"},
 
{key: "dApRGT65XjDattD_QcTxX", pos: [15, 0, 8], texture: "grass"},

{key: "sScK6mTk4hbsCiD7XNZED", pos: [16, 0, 7], texture: "grass"},

{key: "Ek60AUDjXXCdOqTLkMerr", pos: [16, 0, 6], texture: "grass"},
 
{key: "e-uoFANxQfz4HZnCTbW1_", pos: [15, 0, 7], texture: "grass"},
 
{key: "Ej_zxYR8G7mgSghqM-6rt", pos: [15, 0, 6], texture: "grass"},
 
{key: "JKUSlNuqB1wFlLpXBZLDW", pos: [14, 0, 6], texture: "grass"},
 
{key: "cKrzNgOdSRzqq4ngO2SMU", pos: [14, 0, 6], texture: "grass"},
 
{key: "Lb3hfyMn6borHapWGpyYJ", pos: [14, 0, 5], texture: "grass"},
 
{key: "GFsj-4pzrILz2zSBweGi6", pos: [14, 0, 8], texture: "grass"},
 
{key: "vyZKzkSMrgEdof3OBXfrK", pos: [14, 0, 7], texture: "grass"},
 
{key: "ahZVZPEXUfogVAbiL4Iu7", pos: [20, 0, 6], texture: "grass"},
 
{key: "OPKkyQZuElXYGSZjm9ACa", pos: [20, 0, 5], texture: "grass"},
 
{key: "-C5MQwNdX62bLZg2sHMtf", pos: [20, 0, 5], texture: "grass"},
 
{key: "juTmAgIfSlKeztDjuzwKr", pos: [19, 0, 5], texture: "grass"},
 
{key: "9bd4iQBFGAAZdWxURkNgr", pos: [18, 0, 5], texture: "grass"},
 
{key: "Z9yD2hTPrK0E8e5fQmHfk", pos: [18, 0, 5], texture: "grass"},
 
{key: "ur-gzLYBRGFHCPeOtU539", pos: [17, 0, 5], texture: "grass"},
 
{key: "NrhNWpMrNXhLZwqdEAGpX", pos: [16, 0, 5], texture: "grass"},
 
{key: "nBobVG4uyQnKtCbpVofPe", pos: [16, 0, 5], texture: "grass"},
 
{key: "e6YxDheHV3N3fIrLjoYRO", pos: [16, 0, 4], texture: "grass"},
 
{key: "QekecnLCL1_TYenTt3Brp", pos: [15, 0, 5], texture: "grass"},

{key: "9KIJkO2jlKVutJ6y9FY0-", pos: [15, 0, 4], texture: "grass"},
 
{key: "0M4QzvQ1blw2Hm__qUTAE", pos: [18, 0, 5], texture: "grass"},
 
{key: "UqzbWt7XaktUz22O1-TZ4", pos: [19, 0, 4], texture: "grass"},
 
{key: "iODQAFzHuVh7uUZnKTP2Z", pos: [18, 0, 4], texture: "grass"},
 
{key: "0Gp5dKSARD2ys_r74Gjhd", pos: [17, 0, 4], texture: "grass"},
 
{key: "NfcaPHuw9NmGjwoX5KwKd", pos: [16, 1, 9], texture: "log"},
 
{key: "O6woc8UMdgTaHIzGSTfFb", pos: [16, 2, 9], texture: "log"},
 
{key: "H8GyxBUzRvCDLPOWBFa2T", pos: [16, 3, 9], texture: "log"},
 
{key: "dAfIAhDog1d4UU1fb87M1", pos: [16, 2, 8], texture: "wood"},
 
{key: "Z1RVPZVchkoO_qw50W2_Q", pos: [16, 1, 8], texture: "wood"},
 
{key: "5yc-DsdXgUkKLXWnDhDS4", pos: [16, 1, 7], texture: "wood"},
 
{key: "99zIe8WoRGB7QKwmLsqIS", pos: [16, 4, 9], texture: "log"},
 
{key: "JJOOtpx5tsTV_L2YE4sRY", pos: [17, 4, 9], texture: "log"},

{key: "RQ8aVhwEuLyc8wqFDl2O1", pos: [18, 4, 9], texture: "log"},
 
{key: "1H2g2tINMCbrf6lAA2-cd", pos: [19, 4, 9], texture: "log"},
 
{key: "qThT5Q4Tt_WLFcvrKKhE_", pos: [17, 3, 9], texture: "wood"},
 
{key: "pIV0-RRKgu5xCWswD0h72", pos: [18, 3, 9], texture: "wood"},
 
{key: "ynf15l8-lquyevbclsbp7", pos: [19, 3, 9], texture: "wood"},
 
{key: "SpU_UyHCb-sGdliwAkLcr", pos: [20, 4, 9], texture: "log"},
 
{key: "r-KaQ5jfwDChXOT9MSKPl", pos: [20, 3, 9], texture: "log"},
 
{key: "KM6pgr_HAsyShe3b1JhdN", pos: [20, 2, 9], texture: "log"},
 
{key: "vU5a3MZXPD0zu5LCsr5sh", pos: [20, 1, 9], texture: "log"},
 
{key: "AyEE6-GKUTvbNnow89hqf", pos: [16, 4, 8], texture: "log"},
 
{key: "KgzgPetYIT3189_GS4SnX", pos: [16, 4, 7], texture: "log"},
 
{key: "oXuaDd0XhleT41bGMOg9g", pos: [16, 4, 6], texture: "log"},
 
{key: "kAh4ibZSytFmfOnr-VR9G", pos: [16, 4, 5], texture: "log"},
 
{key: "D2NPvQcIOEWwgL7csiuBI", pos: [16, 3, 5], texture: "log"},
 
{key: "dFlzcysr-UYEBnTrCCZgd", pos: [16, 2, 5], texture: "log"},
 
{key: "zjPeNsvPrV5DbrVosbsqP", pos: [16, 1, 5], texture: "log"},

{key: "NSc3BDnVNA4Sh5EWQYxFL", pos: [20, 4, 8], texture: "log"},
 
{key: "JJm4rwBQSwlOewLDowF_7", pos: [20, 4, 7], texture: "log"},
 
{key: "c7W_oCmtsVRpyMPhwhyWG", pos: [20, 4, 6], texture: "log"},
 
{key: "y7SfWEksYX1Q-Gl-tFiNX", pos: [17, 4, 5], texture: "log"},
 
{key: "PQc1GbC9CI7-NPSeFzscG", pos: [18, 4, 5], texture: "log"},
 
{key: "uryWeuXd3-A17xHCOtncb", pos: [20, 4, 5], texture: "log"},
 
{key: "NjK4I9Mpwg8dP999LTttR", pos: [19, 4, 5], texture: "log"},
 
{key: "iSJnwc1ndPUMPXos-0EnD", pos: [20, 3, 5], texture: "log"},
 
{key: "zaQ5SkCoF5_CCOF51_3cZ", pos: [20, 2, 5], texture: "log"},
 
{key: "2jKAipHF81-F7KxtoK3M_", pos: [20, 1, 5], texture: "log"},
 
{key: "uSby4x3g0fYuYNVxBz0dA", pos: [19, 3, 5], texture: "wood"},
 
{key: "1x38079lkjEC5O7upCLRx", pos: [18, 3, 5], texture: "wood"},
 
{key: "gTQ2y3oU-EkFNlKY89oDb", pos: [17, 3, 5], texture: "wood"},
 
{key: "YE5wCrc_mgk-R-mMX9C-J", pos: [17, 1, 5], texture: "wood"},
 
{key: "V6hqg7ggqE6ByAY9Ez0WK", pos: [19, 1, 5], texture: "wood"},
 
{key: "olk7I4jTrCyjh4MxpOQ5Y", pos: [18, 1, 5], texture: "wood"},
 
{key: "YG4Iwxg-5SjrSuGQBWhtr", pos: [17, 2, 5], texture: "glass"},
 
{key: "E0Vt6z67IEiucpIUaptTp", pos: [18, 2, 5], texture: "glass"},
 
{key: "RtN2qWovGFYlm4u2ZLp76", pos: [19, 2, 5], texture: "glass"},
 
{key: "OR-NVcHJMmv77zRACMFXQ", pos: [20, 1, 8], texture: "wood"},

{key: "zAVWz1qRxzuTBf8ncM1XE", pos: [20, 1, 6], texture: "wood"},
 
{key: "oWR2eY6iZe-Ud2mG5qO1S", pos: [20, 3, 6], texture: "wood"},
 
{key: "eV6AS6B0vUunQIAB_aTlh", pos: [20, 3, 7], texture: "wood"},
 
{key: "RVRThe9Y4bUFoSq5n1JtG", pos: [20, 3, 8], texture: "wood"},
 
{key: "WAYrch8zuvpVOyJQb-liq", pos: [20, 2, 7], texture: "wood"},
 
{key: "QUl26xaypcM0TxztaDGuW", pos: [20, 2, 6], texture: "wood"},
 
{key: "V_KmDXBYlJUDdI7SmLkZT", pos: [20, 2, 8], texture: "wood"},
 
{key: "1nHpLZ9SUXnqmkz2JpKyb", pos: [20, 1, 7], texture: "wood"},
 
{key: "Ip4PHJgBbfmWCnYqAImMI", pos: [16, 3, 8], texture: "wood"},
 
{key: "SjxGFEGljGXjjzpmGGHV7", pos: [16, 3, 7], texture: "wood"},
 
{key: "F0q7UCplEWMc9VLGWdkvL", pos: [16, 3, 6], texture: "wood"},
 
{key: "pGcG1S7SjkN-UZrO95N6f", pos: [16, 2, 6], texture: "wood"},
 
{key: "DgzqPKeLxmMM1BlagBg6A", pos: [16, 1, 6], texture: "wood"},
 
{key: "g_kerOlsmBT97Bc2QMHM8", pos: [16, 2, 7], texture: "glass"},
 
{key: "mfsBDNw6V2rW5mKuxSYVc", pos: [21, 0, 5], texture: "grass"},
 
{key: "zNpieqjZO5N7LVpf1PeSX", pos: [21, 0, 6], texture: "grass"},
 
{key: "geIW-ROMTpaNiu1p3nr5I", pos: [22, 0, 6], texture: "grass"},
 
{key: "gmtFe7jP5YPAly-NLtiWD", pos: [21, 0, 7], texture: "grass"},
 
{key: "-C9A0ehOZbwi6NUIYRfVi", pos: [21, 0, 7], texture: "grass"},
 
{key: "DSuVLZnhT_LGP3x-Ld1p9", pos: [21, 0, 8], texture: "grass"},

{key: "the88c1_qWYfCLPehPRLk", pos: [21, 0, 8], texture: "grass"},
 
{key: "Iz8D_LT9AMU1_tOs5wkTj", pos: [20, 0, 9], texture: "grass"},

{key: "z55FO_CVp5fiNhwX7fNTt", pos: [21, 0, 9], texture: "grass"},
 
{key: "E9YBHJebzn7uW6r2TzV7L", pos: [21, 0, 10], texture: "grass"},
 
{key: "_H5LKhqurysYCEoYbGWUu", pos: [20, 0, 4], texture: "grass"},
 
{key: "ZLW-p-KAiyDCUu8NQFF-a", pos: [18, 0, 11], texture: "dirt"},
 
{key: "qsZx9lgHvxx_Q8WNylNn6", pos: [17, 0, 12], texture: "dirt"},
 
{key: "ZE2sAkN4xvpc2Lju_3tha", pos: [20, 0, 10], texture: "dirt"},

{key: "6wUfO6P6qnBO3x7IK0R0G", pos: [19, 0, 10], texture: "dirt"},
 
{key: "0K7bvn7UX0B9dN5FOPD4E", pos: [19, 0, 6], texture: "wood"},
 
{key: "uwMR186oyhpUAV2zaeCdY", pos: [18, 0, 6], texture: "wood"},
 
{key: "yNmbLXAvnrmkVf0yKz4WF", pos: [18, 0, 7], texture: "wood"},
 
{key: "RhWS2dOmSt57ixfWAuAoD", pos: [19, 0, 8], texture: "wood"},
 
{key: "UOAiZdcnMmvDzTbRMeLC6", pos: [18, 0, 8], texture: "wood"},
 
{key: "SiIMXPdz1S3HV-qr_tPIB", pos: [18, 0, 9], texture: "wood"},

{key: "OUQ5VHrlUGMAtsctvcT19", pos: [19, 0, 7], texture: "wood"},
 
{key: "Hjf9iJg-ZBCTgEs0xHyeP", pos: [17, 0, 6], texture: "wood"},
 
{key: "hhhq__u-MbCBODnGiHSQh", pos: [17, 0, 7], texture: "wood"},
 
{key: "VuSuDGObZvE0wPUnsx9NN", pos: [17, 0, 8], texture: "wood"},
 
{key: "j_976o4Ki6sWE3jMhkaCJ", pos: [17, 0, 9], texture: "wood"},
 
{key: "aBQYQbun6M-WG9L9XLVnm", pos: [20, 0, 9], texture: "wood"},
 
{key: "qRHH2DnGC-WgzV2u0Z5YC", pos: [19, 0, 9], texture: "wood"} ]
const getLocalStorage =(key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key,JSON.stringify(value))

export const useStore = create((set) => ({
    texture : 'dirt',
    cubes: getLocalStorage('cubes') || startingHouse,
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes : [
                ...prev.cubes,
                {
                    key:nanoid(),
                    pos:[x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube : (x,y,z) => {
        set((prev) => ({
            cubes : prev.cubes.filter(cube => {
                const[X,Y,Z] = cube.pos 
                return X !== x || Y !== y || Z !== z;
            })
        }))

    },
    setTexture : (texture) => {
        set(() => ({
            texture
        }))
    },
    saveWorld : () => {
        set((prev) =>{
            setLocalStorage('cubes',prev.cubes)
        })
    },
    resetWorld : () => {
        set(() => ({
            cubes : []
        }))
    },
}))