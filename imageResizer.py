import os
from PIL import Image

rootDir = "./uploads"
exclusions = ['.DS_Store','favicon.png']
subdirectories = [directory for directory in os.listdir(rootDir) if directory not in exclusions]
allPhotos = []
for directory in subdirectories:
    fullpath = f"{rootDir}/{directory}"
    for photo in os.listdir(fullpath):
        allPhotos.append(f"{fullpath}/{photo}")


def isCloseTo(val1,val2, threshold):
    return abs(val1-val2) < threshold

idealSize = (1100, 500)
def resizeImage(imagePath,idealSize):
    idealSizeProduct = idealSize[0] * idealSize[1]
    image = Image.open(imagePath)
    imageSizeProduct = image.size[0] * image.size[1]
    if idealSizeProduct < imageSizeProduct:
        ratio = idealSizeProduct / imageSizeProduct
        newsize = (int(image.size[0] * ratio), int(image.size[1] * ratio))
        newImage = image.resize(newsize)
        newImage.save(imagePath)
    else:
        print('smaller')

oversizedImages = [image for image in allPhotos if os.stat(image).st_size/1000 > 500]
for image in oversizedImages:
    pil_image = Image.open(image)
    new_image = pil_image.resize([int(size * .8) for size in pil_image.size])
    new_image.save(image)

# print(oversizedImages)

# goalsize = 400
# wellSizedImages = [image for image in allPhotos if isCloseTo((os.stat(image).st_size/1000),goalsize, 10)]
# allPhotos = os.listdir("./src/assets/images/wineguy_photos/")
# image_path = "./src/assets/images/wineguy_photos/services_background.jpeg"
# image = Image.open(image_path)
# image = image.resize(([int(size * .6) for size in image.size]))
# image.save(image_path)
# for image in allPhotos:
    # resizeImage(f"./src/assets/images/wineguy_photos/{image}",idealSize)
# print(wellSizedImages)

# imageSizes = sorted([os.stat(image).st_size / 1000 for image in allPhotos])
# print(imageSizes)

# print(allPhotos)