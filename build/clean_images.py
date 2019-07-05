import os, sys
from typing import * #pylint: disable=unused-wildcard-import
from pathlib import Path

def clean_path(path: Path, ext = ".jpg", remove_files = True, whitelist = [".pth"]):
    for root, _, files in os.walk(path):
        i = 0
        fname_len = len(str(len(files)))
        for fname in files:
            src = os.path.join(root, fname)
            dst = os.path.join(root, str(i).zfill(fname_len) + ext)
            # remove non images
            if remove_files and src[-len(ext):] != ext:
                if src[-len(ext):] in whitelist:
                    print("Skipping whitelisted file: " + src)
                else:
                    os.remove(src)
                    print("Removed blacklisted file: " +  src)
                continue 
            # check to see if the file is already sorted
            try: 
                fname_no_ext = fname[:-len(ext)]
                if len(fname_no_ext) == fname_len and int(fname_no_ext) < len(files):
                    continue
            # an unsorted image
            except:
                pass
            # prevent renaming images to existing image names
            while os.path.isfile(dst):
                dst = os.path.join(root, str(i).zfill(fname_len) + ext)
                i = i + 1
            os.rename(src, dst)
            i = i + 1
            print("Renamed " + src + " to " + dst)

if __name__ == "__main__":
    root_path = Path("img/photography/medium-res")
    if len(sys.argv) > 1:
        root_path = sys.argv[1]
    clean_path(root_path)