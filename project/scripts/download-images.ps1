$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$outDir = Join-Path $scriptDir '..\images'

# Ensure output directory exists
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$files = @(
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/960px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg'; name = 'african_fish_eagle.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/960px-Common_Kingfisher_Alcedo_atthis.jpg'; name = 'malachite_kingfisher.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg/960px-Village_weaver_%28Ploceus_cucullatus_cucullatus%29_male.jpg'; name = 'village_weaver.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Grey-crowned_crane.jpg/1280px-Grey-crowned_crane.jpg'; name = 'grey_crowned_crane.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg/960px-Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29_Echuya_Uganda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail'; name = 'grey_crowned_crane_echuya.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Landscape_of_Hazarikhil_Wildlife_Sanctuary.jpg/960px-Landscape_of_Hazarikhil_Wildlife_Sanctuary.jpg'; name = 'landscape_hazarikhil.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_fish_eagle_%28Haliaeetus_vocifer%29.jpg/960px-African_fish_eagle_%28Haliaeetus_vocifer%29.jpg'; name = 'african_fish_eagle_2.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Austin_Roberts_Bird_Sanctuary-010%2C_Balearica_regulorum_%28Grey_crowned_crane%29.jpg/960px-Austin_Roberts_Bird_Sanctuary-010%2C_Balearica_regulorum_%28Grey_crowned_crane%29.jpg'; name = 'grey_crowned_crane_2.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/White-throated_Kingfisher_in_Ludhiana_district%2C_Punjab_03.jpg/960px-White-throated_Kingfisher_in_Ludhiana_district%2C_Punjab_03.jpg'; name = 'white_throated_kingfisher.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Spotted-backed_weaver_%28Ploceus_cucullatus_spilonotus%29_female_Mauritius.jpg/960px-Spotted-backed_weaver_%28Ploceus_cucullatus_spilonotus%29_female_Mauritius.jpg'; name = 'spotted_backed_weaver.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg/960px-African_Paradise_Flycatcher_-_Kenya_NH8O0536_%2818822382274%29.jpg'; name = 'african_paradise_flycatcher_2.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Terpsiphone_viridis_-_African_Paradise_Flycatcher.jpg/960px-Terpsiphone_viridis_-_African_Paradise_Flycatcher.jpg'; name = 'african_paradise_flycatcher.jpg' },
    @{ url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg/960px-Common_bulbul_%28Pycnonotus_barbatus_barbatus%29.jpg'; name = 'common_bulbul.jpg' }
)

foreach ($file in $files) {
    $outPath = Join-Path $outDir $file.name
    Write-Host "Downloading $($file.url) -> $outPath"
    try {
        Invoke-WebRequest -Uri $file.url -OutFile $outPath -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $($file.url): $_"
    }
}

Write-Host "Done. Images saved to $outDir"