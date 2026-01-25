#!/run/current-system/sw/bin/bash

# Usage: ./list_by_size.sh [directory]
# Default to current directory if no argument is given

DIR="${1:-.}"

# Find all files, print size and path, sort by size numerically, and pretty-print
find "$DIR" -type f -printf '%s %p\n' | sort -n | awk '{print $2, "(", $1, "bytes)"}'
