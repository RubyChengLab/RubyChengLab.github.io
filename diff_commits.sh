# 用法：
# .\diff_commits.ps1 <舊的commit> <新的commit>

param (
    [Parameter(Mandatory=$true)]
    [string]$OldCommit,

    [Parameter(Mandatory=$true)]
    [string]$NewCommit
)

Write-Host "比較 $OldCommit 與 $NewCommit 之間的變動..."

# 顯示變更的檔案清單
git diff --name-status $OldCommit $NewCommit

Write-Host ""
Write-Host "針對重要檔案的詳細變更（_config.yml、categories資料夾、_layouts資料夾）："

git diff $OldCommit $NewCommit -- _config.yml categories/ _layouts/
